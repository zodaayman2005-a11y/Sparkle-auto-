# التثبيت السريع — HDI-OS 1.2.0

## 1) افحص الحزمة

```bash
python hdi.py validate
```

لازم تظهر `RESULT: PASS`.

## 2) ثبّت لـCodex وAntigravity

```bash
python hdi.py install \
  --target both \
  --scope project \
  --project-dir "/المسار/إلى/مشروعك" \
  --install-project-rules \
  --install-custom-agents
```

المثبت لا يستبدل الملفات الموجودة بدون `--force`.

## 3) أنشئ ملفات حقيقة المشروع

```bash
python hdi.py init \
  --project-dir "/المسار/إلى/مشروعك" \
  --name "اسم المشروع" \
  --owner "Hyzex"
```

لإنشاء الـ18 Workbook المتخصصة أيضًا:

```bash
python hdi.py init \
  --project-dir "/المسار/إلى/مشروعك" \
  --name "اسم المشروع" \
  --owner "Hyzex" \
  --extended
```

استخدم `--extended` للمشاريع الكبيرة فقط، أو احذف/اترك Draft للملفات غير المطلوبة.

## 4) أول أمر للموديل

```text
Use design-director. Read project truth and DECISIONS.md. Classify the surface,
user job, languages/devices, evidence, risk, and existing system. Select one
primary domain pack and activate only skills that can change the decision.

Do not code an ambitious direction before research/originality and direction
gates. After approval, produce applicable specialist contracts, test high-risk
journeys, implement real truth, run design-ops-handoff, and finish with rendered
visual-qa-refinement. Fix every blocking and major finding.
```

## 5) مهارات البحث من الإنترنت

أنشئ جلسة بحث عند الحاجة:

```bash
python hdi.py research \
  --project-dir "/المسار/إلى/مشروعك" \
  --title "Website research" \
  --surface landing-page \
  --industry "مجال المشروع" \
  --audience "الجمهور" \
  --market Egypt \
  --language ar-EG \
  --depth standard \
  --question "ما القرار التصميمي الذي نحتاج دليلًا حديثًا له؟" \
  --decision "اختيار الاتجاه أو تجربة الاستخدام"
```

ثم:

```bash
python hdi.py research-validate --session-dir "/path/to/research/session"
```

## 6) المرجع الكامل

اقرأ `orchestration/ROUTER.md` لاختيار المهارات، و`docs/V1.2-SPECIALIST-SKILLS.md` لفهم الطبقات الجديدة، و`prompts/` لأوامر التشغيل الجاهزة.
