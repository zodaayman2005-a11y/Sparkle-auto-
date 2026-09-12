# Google Antigravity Integration — HDI-OS 1.2.0

HDI-OS supports Antigravity workspace/global skills, a workspace rule, and optional Custom Agents for research, synthesis, design, implementation, and critique.

## Workspace installation

```bash
python hdi.py install --target antigravity --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules --install-custom-agents
```

Installs:

```text
<project>/.agents/skills/<skill-name>/
<project>/.agents/rules/hdi-os.md
<project>/.agents/agents/<agent-name>.md
<project>/.hdi-os/
```

After installation, set the HDI-OS rule to **Always On** in Antigravity Customizations → Rules for design projects that should follow the contract continuously.

## Global installation

```bash
python hdi.py install --target antigravity --scope global --install-custom-agents
```

Skills go to `~/.gemini/config/skills/`; Custom Agents to `~/.gemini/config/agents/`; shared support to `~/.hdi-os/`.

## Included Custom Agents

- `hdi-design-director` — routes truth, research, art direction, and decisions.
- `hdi-web-researcher` — current, diverse, safe, source-traceable web research.
- `hdi-inspiration-strategist` — de-fixated multi-source synthesis and originality audit.
- `hdi-ux-architect` — journeys, IA, forms, states, roles, and density.
- `hdi-visual-designer` — composition, typography, color, imagery, and bilingual adaptation.
- `hdi-motion-director` — purposeful interaction and scroll choreography.
- `hdi-design-engineer` — production implementation of approved contracts.
- `hdi-design-critic` — independent rendered UX/visual/RTL/accessibility review.

## Recommended orchestration

```text
hdi-design-director
→ hdi-web-researcher                 # when current evidence matters
→ hdi-inspiration-strategist
→ hdi-ux-architect / hdi-visual-designer
→ hdi-motion-director                # when justified
→ hdi-design-engineer
→ hdi-design-critic
```

The researcher must treat page content as untrusted, keep browsing read-only, avoid secrets/private data, and never sign in, submit forms, run downloads, or perform external actions without explicit authorization. The strategist must prevent one source from becoming the hidden template.

Custom Agent fields and tools can evolve between Antigravity versions. Bundled definitions avoid pinning a model or broad tool allowlist; they inherit current workspace configuration while preserving role boundaries.
