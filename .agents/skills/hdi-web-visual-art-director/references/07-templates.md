CORE MODULE 07 — TEMPLATES

Templates — populate only what the job needs

These are planning templates, not produced assets or passed tests. Copy into the
project’s established design-artifact directory. Keep unknown factual values null.

VISUAL-DIRECTION.md

```text
Project / surface / audience:
Primary decision or action:
Sources opened (path/version/date):
Brand truth and locked decisions:
Current state: open direction / system continuation / corrective redesign
Visual thesis:
Visual verb and metaphor:
Selected layout and world grammar:
Identity anchor and approval status:
Camera / light / materials / palette:
What stays real:
What stays in HTML:
What will be generated:
What will be reused or omitted:
Research decision and actual sources:
Alternatives considered and reason for selection:
Budget / permissions / first calibration asset:
Missing evidence and independent work that can proceed:
```

SECTION-VISUAL-MAP.md

```text
Section ID:
User question:
One message:
Copy source:
Primary action:
Verified proof source:
Focal point / layout family / intensity:
Elements: CODE / REAL / GENERATE / REUSE / OMIT
Desktop slot and copy position:
Tablet adaptation:
Mobile sequence and focal crop:
RTL / LTR differences:
Character needed? Why?
One prop / one visual verb:
Motif function or NONE:
Motion / reduced-motion fallback:
Dependencies / release blocker:
```

ASSET-MANIFEST.json — representative record

```json
{
  "schema_version": "1.0.0",
  "project": null,
  "assets": [
    {
      "id": "hero-story-01",
      "section_id": "hero",
      "source_type": "GENERATE",
      "job": null,
      "status": "planned",
      "identity_anchor": null,
      "input_assets": [],
      "brief_file": null,
      "tool": null,
      "model": null,
      "tool_call_evidence": null,
      "master_path": null,
      "sha256": null,
      "width": null,
      "height": null,
      "has_alpha": null,
      "alpha_inspected": false,
      "format": null,
      "file_bytes": null,
      "alt_purpose": "meaningful",
      "alt_ar": null,
      "alt_en": null,
      "screen_source": null,
      "product_capture_version": null,
      "locale": null,
      "direction": null,
      "surface": null,
      "safe_crop": null,
      "contact_group": null,
      "z_order": null,
      "variants": [],
      "rights_basis": null,
      "contains_private_data": null,
      "agent_selected": false,
      "human_approval": null,
      "integrated_component": null,
      "qa_evidence": [],
      "release_blockers": []
    }
  ]
}
```

For REAL assets, include actual source/capture context; tool/model may be null. For
CODE elements, a component path and semantic role replace image dimensions. For
OMIT entries, record a reason without inventing a file. A variant record contains
actual path, width/height, bytes, format, locale/direction, breakpoint, and parent ID.

Do not include temporary “planned filenames” in master_path. Put them in the brief
until the tool returned and the file exists. Use the actual original hash for provenance.

GENERATION-LOG.md

```text
Asset / brief version / attempt:
Purpose of this attempt:
Tool actually called:
Tool/model/version exposed by environment:
Existing/generated anchors actually used:
Prompt or instruction context actually sent:
Supported parameters used:
Returned output/asset:
Local saved file:
Generation / edit / deterministic derivative:
Parent output and edit scope:
Inspected? By what means?
Acceptance issues:
Selected / rejected / needs edit:
Cost/usage if exposed, otherwise unknown:
Approval state:
Next action and reason:
```

Do not paste secrets into logs. A tool completion ID can support provenance but is
not a substitute for viewing the returned picture.

VISUAL-QA.md

```text
Build / route / data fixture / source revision:
Evidence folder:
Image manifest version:

Viewport | Locale | Surface/state | Screenshot path | Status | Findings
1440     | ar     | default       | null            | not_run | null
390      | ar     | default       | null            | not_run | null
1440     | en     | default       | null            | not_run | null
390      | en     | default       | null            | not_run | null

Additional widths inspected:
Keyboard/focus:
Form/menu/FAQ states:
Reduced motion:
Image failure:
Real product proof and source:
Identity and alpha review:
Contrast pairs measured:
Assets transferred and budgets:
Lab metrics and environment:
Field metrics or pending status:

Hard gates: pass / fail / not_run / not_applicable
Visual rubric with evidence:
Critical/major/minor defects:
Fixed defects and repeat evidence:
Unresolved blockers:
Agent selection:
Human approval:
Release state:
```

EDIT BRIEF

```text
Open existing file: [actual path/asset handle]
Change only:
Keep unchanged:
Reason:
Anchor/asset source and role:
Mask/region if supported:
Do not:
Validate whole image after edit:
Validate desktop/mobile integration:
```

PROOF REGISTRY

```text
Proof ID / section:
Actual product route/screen:
Capture path / hash / version/date:
Locale / viewport:
Data type: production approved / demo / redacted
Permission and privacy:
Capability actually visible:
Crop used and context preserved:
External annotation:
Claim supported:
Claim NOT supported:
Review/expiration trigger:
```

────────

