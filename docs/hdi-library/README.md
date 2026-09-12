# Hyzex Design Intelligence OS — HDI-OS v1.2.0

نظام تشغيل تصميم للـAI يحوّل الموديل من مولّد واجهات وكود إلى استوديو متكامل: بحث مستخدمين وإنترنت، Art Direction، Brand World، UX، محتوى وتحويل، Data Visualization، Assets، Motion و3D، Accessibility، Localization، Trust، Performance، Design Systems، Measurement، Experiments، Handoff، وتنقيح بصري نهائي.

## محتويات الإصدار

- **34 Agent Skills** قابلة للتحميل التدريجي.
- **18 Antigravity Custom Agents** لأدوار الاستوديو.
- **30 Prompt Recipes** جاهزة للتشغيل.
- **71 Eval Cases**: 17 اختبارًا أساسيًا + 54 اختبارًا للمهارات الجديدة (Positive / Boundary / Adversarial).
- **27 Project Templates**: 9 ملفات حقيقة أساسية + 18 ملف متخصص اختياري.
- **8 Domain Packs**.
- Research session system وسجل مصادر وOriginality Gates.
- Playwright Visual QA tooling.
- Installer لـCodex وAntigravity وValidator وManifest وPreference Memory.

## الجديد في v1.2.0

تم تنفيذ كل الـ18 مهارة التي كانت في الـRoadmap:

1. `user-research-synthesis`
2. `prototype-usability-testing`
3. `brand-world-building`
4. `content-information-design`
5. `conversion-behavior-design`
6. `data-visualization`
7. `design-system-governance`
8. `asset-production-direction`
9. `performance-perceived-quality`
10. `experiment-optimization`
11. `trust-privacy-security-ux`
12. `localization-culturalization`
13. `creative-coding-lab`
14. `spatial-3d-world-building`
15. `inclusive-accessibility-design`
16. `seo-discoverability-information`
17. `design-ops-handoff`
18. `product-metrics-instrumentation`

كل مهارة تحتوي على Trigger وحدود استخدام، Evidence Requirements، Workflow، Outputs، Hard Gates، Handoffs، Anti-patterns، ثلاث Worksheets، وMetadata للتشغيل.

## التثبيت

```bash
python hdi.py validate

python hdi.py install \
  --target both \
  --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules \
  --install-custom-agents
```

المهارات تُثبت في:

```text
<project>/.agents/skills/
```

ودعم HDI-OS في:

```text
<project>/.hdi-os/
```

## إنشاء ملفات المشروع

الأساسية فقط:

```bash
python hdi.py init \
  --project-dir "/path/to/project" \
  --name "Project Name" \
  --owner "Hyzex"
```

الأساسية + كل ملفات التخطيط المتخصصة:

```bash
python hdi.py init \
  --project-dir "/path/to/project" \
  --name "Project Name" \
  --owner "Hyzex" \
  --extended
```

لا تستخدم `--extended` لكل مشروع تلقائيًا؛ استخدم الملفات التي تناسب قرارات المشروع حتى لا يتحول النظام إلى بيروقراطية.

## طريقة التشغيل

```text
Truth + User Evidence
→ Current Web/Category Evidence when needed
→ Original Direction + Brand World
→ UX + Content + Conversion/Data/Trust Contracts
→ Visual + Component + Asset + Motion Contracts
→ Responsive + Localization + Accessibility + Performance
→ Prototype + Usability Evidence
→ Instrumentation/Experiment Plan when needed
→ Implementation + Design Ops Handoff
→ Rendered QA + Release Evidence + Learning
```

الـRouter موجود في `orchestration/ROUTER.md` و`orchestration/router.json`. لا يتم تحميل الـ34 Skill معًا؛ يتم اختيار أقل مجموعة تغيّر القرار فعليًا.

## بداية قوية لأي مشروع

```text
Use design-director.

Read all available project truth and locked decisions. Classify the surface,
primary user/job, content and product truth, languages, devices, risk, and
existing system maturity. Select one domain pack.

Activate only the specialist skills that can change a material decision. When
user evidence exists, synthesize it with user-research-synthesis. When current
public evidence matters, run the research pipeline safely. For ambitious or
underspecified visual work, create three materially different, originality-
audited directions before production code.

After direction lock, produce the applicable UX, content, conversion/data,
brand-world, visual, component, asset, motion, responsive, localization,
accessibility, trust, performance, measurement, and delivery contracts. Test
high-risk journeys with representative task evidence, implement approved truth,
and finish with design-ops-handoff plus visual-qa-refinement. Fix all blocking
and major findings before approval.
```

## أهم الأدلة

- `docs/START-HERE.md`
- `orchestration/ROUTER.md`
- `docs/SKILLS-CATALOG.md`
- `docs/V1.2-SPECIALIST-SKILLS.md`
- `docs/RESEARCH-AND-INSPIRATION.md`
- `evals/RUNBOOK.md`
- `INSTALL-QUICK-AR.md`

## مبدأ أساسي

الأداة لا تصبح خارقة بكثرة الملفات وحدها. قوتها تأتي من: Truth واضح، Skills متخصصة تُحمّل عند الحاجة، Evidence حقيقي، Originality، Outputs قابلة للاختبار، Browser/Prototype feedback، وCritic مستقل.
