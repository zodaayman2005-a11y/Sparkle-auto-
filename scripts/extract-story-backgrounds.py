"""Offline cutouts; requires onnxruntime, NumPy and Pillow in a separate Python environment.
BiRefNet-general-lite weights from rembg, MD5 4fab47adc4ff364be1713e97b7e66334.
Original RGB pixels and source files stay untouched. Model weights never ship.
"""
from pathlib import Path
import argparse, hashlib, json, os
os.environ.setdefault('OMP_NUM_THREADS', '4')
from PIL import Image
import numpy as np
import onnxruntime as ort

parser = argparse.ArgumentParser()
parser.add_argument('--sample', action='store_true')
parser.add_argument('--model', default='birefnet-general-lite')
args = parser.parse_args()
model = args.model
options = ort.SessionOptions()
options.graph_optimization_level = ort.GraphOptimizationLevel.ORT_DISABLE_ALL
options.enable_cpu_mem_arena = False
options.enable_mem_pattern = False
options.intra_op_num_threads = 2
options.inter_op_num_threads = 1
print('Loading segmentation model', flush=True)
session = ort.InferenceSession(str(Path.home()/'.u2net'/f'{model}.onnx'), sess_options=options, providers=['CPUExecutionProvider'])
print('Model ready', flush=True)
sources = [Path('public/art/audience/10.webp'), Path('public/art/strategies/01.webp')] if args.sample else [p for group in ('audience', 'strategies', 'setup') for p in sorted(Path('public/art', group).glob('*.webp'))]
records = []
for source in sources:
    output = Path('public/art/cutouts') / source.parent.name / source.name
    output.parent.mkdir(parents=True, exist_ok=True)
    original = Image.open(source).convert('RGB')
    resized = np.asarray(original.resize((1024, 1024), Image.Resampling.LANCZOS), dtype=np.float32) / 255.0
    normalized = (resized - np.array([.485,.456,.406], dtype=np.float32)) / np.array([.229,.224,.225], dtype=np.float32)
    tensor = normalized.transpose(2,0,1)[None]
    logits = session.run(None, {session.get_inputs()[0].name: tensor})[0][0,0]
    prediction = 1 / (1 + np.exp(-np.clip(logits, -80, 80)))
    prediction = (prediction-prediction.min()) / (prediction.max()-prediction.min())
    mask = Image.fromarray((prediction*255).astype('uint8')).resize(original.size, Image.Resampling.LANCZOS)
    # Remove only near-zero numerical mask residue; retain antialiased edges.
    mask = mask.point(lambda v: 0 if v < 3 else 255 if v > 252 else v)
    result = original.copy()
    result.putalpha(mask)
    result.save(output, 'WEBP', lossless=True, method=6, exact=True)
    alpha = np.asarray(mask)
    assert alpha.min() == 0 and alpha.max() == 255
    decoded = Image.open(output).convert('RGBA')
    assert np.array_equal(np.asarray(decoded)[:,:,:3], np.asarray(original))
    records.append({'source':str(source).replace('\\','/'), 'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(), 'output':str(output).replace('\\','/'), 'model':model, 'state':'processed_pending_visual_qa', 'size':list(result.size), 'bytes':output.stat().st_size, 'transparentFraction':round(float((alpha==0).mean()),3), 'originalRGBPreserved':True})
    print(str(output), records[-1]['transparentFraction'], flush=True)
Path('artifacts/scroll-cutouts/processing-manifest.json').write_text(json.dumps(records,indent=2)+'\n')
