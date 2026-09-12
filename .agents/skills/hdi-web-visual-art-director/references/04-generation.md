CORE MODULE 04 — GENERATION AND CONSISTENCY

Generation, identity consistency, and efficient iteration

Establish an anchor before the batch

Recurring identity must be stabilized before batch production.

If the project already contains an approved character/object asset, inspect it and record stable invariants:
face/form shape, hair or surface details, proportions, outfit/materials, accessories, age impression where relevant,
and side-specific details such as watch wrist, asymmetrical trim, ports, controls, or markings.

If no approved identity asset exists, do not require the user to provide an image.
Write a locked textual identity specification and create one calibration asset.
Inspect it, correct it, and mark the accepted output as the project’s internal identity anchor.

For a new original brand character, identity design is a separate decision before building the site’s pose library.
Do not introduce a mascot when the brand does not need one.

Do not guess a real person’s identity or sensitive/personal traits from an image.
Do not claim an asset is human-approved unless it actually is.

Anchor role binding

Use a small relevant set per call:

```text
IDENTITY ANCHOR: recurring character/object identity only; preserve locked invariants.
STYLE ANCHOR: selected project lighting/material family only.
REAL PRODUCT ASSET: never redraw or reinterpret; integrate separately in the webpage.
TEXT BRIEF: new action, prop, crop, expression, and composition.
```

Only list assets actually passed to the tool.
Do not claim the tool saw an asset just because its filename appeared in a paragraph.

Shared style block

Create one compact block used across the asset family. Example structure:

```text
Rendering: [approved family]. Camera: [height/angle/perspective].
Lighting: [key direction + softness + fill]. Materials: [bounded set].
Graphic palette: [roles]. Identity: [locked invariants tied to the identity specification/accepted anchor].
Edges/background: [alpha or intentional plate]. Finish: [specific surface quality].
```

Then append only the asset-specific action and composition. Avoid conflicting words
such as photorealistic, cartoon, flat vector, clay, metallic, and plush all in one
request unless a carefully defined mixed-media concept genuinely requires them.

Minimal-scene standard

One primary message. One visual verb. One main metaphor. One dominant prop or coherent
prop group. Zero to two secondary objects unless a specific story needs more.

Do not ask for “rich details everywhere.” Concentrate detail in the face, hands,
physical contact, main object, and material transitions. Background breathing room
is intentional. Large scale contrast can carry the story without six floating cards.

Simple does not mean generic: a deliberate pose, unusual but clear scale relationship,
recognizable light, and restrained materials can make a single prop distinctive.

Layering standard: useful separation, not impossible promises

Separate character, props, atmosphere, contact shadow, and motif when it enables real
responsive placement or motion AND the production route can deliver coherent results.
Do not assume a flattened generated image contains recoverable layered source files,
a rig, depth pass, normal map, or 3D model.

When a hand grips a prop, a body leans on a surface, or fabric/contact shadow is coupled,
generate the physically interacting group as one coherent asset unless a real DCC
pipeline or accurate edit supports separation. Reconstructing contact from unrelated
generations often causes floaty hands, mismatched scale, and inconsistent shadows.

For a real screenshot, prefer a code-built product frame as a separate layer. A blank
generated device shell may be used only when the real screenshot can be inserted
cleanly and legibly without generative repainting. Flat browser frames are usually
safer than strong perspective when UI proof is important.

Transparency is verified, not requested and assumed

Check the decoded alpha channel and inspect on white, pale blue, and navy surfaces.
Reject baked checkerboards, solid backgrounds mislabeled transparent, edge halos,
matted shadows that become boxes, and missing hair/finger edges.

Use native alpha when available. Otherwise use a supported clean-background/matting
workflow, preserving the approved subject, or choose an intentionally opaque section.
The exact supported model/format options belong to the current tool docs (O3), not
hard-coded assumptions. A JPEG does not deliver an alpha channel.

Retain high-quality source output before optimization. Export derivatives with the
right canvas dimensions and visual padding. Verify that format conversion actually
preserved transparency.

QA immediately after each returned result

Inspect:

• Identity match, including beard/hair shape, wardrobe, wrist accessories, and proportions.
• Pose, balance, gaze direction, expression, hands, feet, finger/prop contact, and anatomy.
• One-second meaning and absence of accidental secondary stories.
• Camera, light direction, scale, material family, and contact shadow.
• Safe edges, mobile crop, silhouette on required surfaces, and copy clearance.
• Absence of unwanted text, logo mutation, UI hallucination, or extra props.
• Real pixel dimensions, file type, alpha, and visible compression artifacts.

A tool reporting success is not visual approval. Character consistency and exact
composition can still drift; the image guide’s limitations are listed in O3.

Defect-driven editing

Use an edit when the concept is good and one change is local. State both change and
invariants. Example:

```text
Edit the attached selected asset. Change only the right-hand grip so the fingers
naturally wrap around the handle. Preserve the character identity, left wrist watch,
outfit, expression, main prop geometry, camera, crop, light, and background/alpha.
Do not add any text, device UI, new objects, or visual effects.
```

This example is usable only when those invariants match the locked identity specification
or accepted anchor. Never invent side-specific details such as a watch wrist without checking the project identity record.

Re-open the whole edited result, not just the requested region. An edit can accidentally
change unrelated details. Compare against the chosen anchor and prior version.

When to restart

Restart the scene concept if the metaphor is unclear, the pose cannot fit mobile,
product proof is structurally hidden, or the composition needs incompatible layers.
Do not repeatedly polish a fundamentally wrong shot.

After two targeted edits fail the same acceptance criterion, simplify the scene,
change the anchor/setup, or revise the layer boundary before another attempt.
This is a resource-control rule, not a guarantee of convergence.

Batch discipline

Generate the calibration image first. After it fits desktop and mobile, produce the
remaining related assets using that anchor and the shared style block. Batch only
independent requests when the tool supports it and the budget permits it. Do not
parallelize conflicting character experiments as if they were a coherent final set.

Do not generate every breakpoint, locale, background, pose, and state combination
by default. Responsive delivery crops and code changes may solve many variants.
Do not re-generate a logo, UI, or approved screenshot to obtain a different resolution.

Revision records

Keep asset ID, brief version, actual tool/model when exposed, input anchors/assets, output
path, original-versus-derivative relation, edit target, defect, acceptance result,
selected version, and approval status. Store seed only if the tool exposes one;
it is neither universally available nor sufficient to guarantee identity.

────────

