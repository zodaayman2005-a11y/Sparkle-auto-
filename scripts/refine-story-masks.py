from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter
from scipy.ndimage import binary_fill_holes, binary_closing, binary_opening, label
for group,ids in [('audience',['01','06','07','08','09']),('setup',['01','04','05'])]:
 for ident in ids:
  source=Path('public/art')/group/(ident+'.webp');target=Path('public/art/cutouts')/group/(ident+'.webp')
  rgb=Image.open(source).convert('RGB');a=np.asarray(rgb).astype(float)
  pale=(a[:,:,0]>145)&(a[:,:,1]>180)&(a[:,:,2]>198)&((a[:,:,2]-a[:,:,0])>-10)&((a[:,:,2]-a[:,:,0])<105)
  semantic=np.asarray(Image.open(target).getchannel('A'))>200
  fg=(~pale)|semantic
  fg=binary_closing(fg,iterations=3)
  fg=binary_fill_holes(fg)
  components,n=label(fg);sizes=np.bincount(components.ravel()); fg &= sizes[components]>90
  # A subpixel edge softening, not a global color blend.
  mask=Image.fromarray((fg*255).astype('uint8')).filter(ImageFilter.GaussianBlur(.55))
  rgb.putalpha(mask);rgb.save(target,'WEBP',lossless=True,method=6,exact=True)
  print(group,ident,flush=True)
from PIL import Image,ImageDraw,ImageFilter,ImageChops
from pathlib import Path
polygons={
'setup/01': [[(510,217),(908,146),(925,160),(837,1046),(820,1064),(390,979)]],
'setup/05': [[(475,196),(887,124),(906,139),(841,1029),(824,1048),(383,963)]],
'setup/04': [[(520,352),(546,331),(565,332),(574,302),(602,284),(643,283),(668,303),(681,329),(735,327),(760,348),(773,628),(733,644),(498,670),(464,630),(462,574),(497,531),(503,423),(514,422)],[(780,389),(795,365),(823,360),(841,382),(844,485),(866,493),(878,545),(853,594),(800,610),(776,595)],[(875,437),(887,403),(911,394),(931,411),(933,459),(925,488),(930,554),(916,574),(875,577)]]
}
for key,shapes in polygons.items():
 p=Path('public/art/cutouts')/(key+'.webp');im=Image.open(p).convert('RGBA');mask=im.getchannel('A');extra=Image.new('L',im.size);d=ImageDraw.Draw(extra)
 for shape in shapes:d.polygon(shape,fill=255)
 extra=extra.filter(ImageFilter.GaussianBlur(.5));im.putalpha(ImageChops.lighter(mask,extra));im.save(p,'WEBP',lossless=True,exact=True,method=4)
