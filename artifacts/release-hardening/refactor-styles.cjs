const fs = require('node:fs');
const postcss = require('postcss');
// Only verified obsolete UI and the hero (replaced by its own stylesheet).
const obsolete = /\.(?:hero(?:-[\w-]+)?|stage-tab|stage-rail|stage-caption|caption-line|comparison(?:-[\w-]+)?|subscription(?:-[\w-]+)?|proof-placeholder|placeholder-[\w-]+|crop-mark|phone-proof|customer-phone|hero-owner-image|fit-wall|fit-check|fit-number|chapter-nav|chapter-number|story-layout|story-sticky|story-stage(?:-[\w-]+)?|story-copy|story-chapter|inside-product|operational-annotation|linear-story|enhanced-story|setup-steps|tl|tr|bl|br)(?=[\s.:>\[#,]|$)/;
const records = [];
for (const file of ['src/app/globals.css', 'src/styles/sections.css', 'src/styles/refinement.css']) {
  const original = fs.readFileSync(file, 'utf8');
  fs.copyFileSync(file, 'artifacts/release-hardening/baseline/' + file.split('/').pop());
  const root = postcss.parse(original);
  root.walkRules(rule => {
    const selectors = rule.selectors.filter(selector => !obsolete.test(selector));
    if (selectors.length) rule.selectors = selectors;
    else rule.remove();
  });
  root.walkDecls(decl => {
    if (decl.value === '2px solid var(--navy)') decl.value = 'var(--border)';
    const shadows = { '3px 3px 0 var(--navy)': 'var(--shadow-sm)', '5px 5px 0 var(--navy)': 'var(--shadow-md)', '7px 7px 0 var(--navy)': 'var(--shadow-lg)' };
    if (shadows[decl.value]) decl.value = shadows[decl.value];
    if (decl.prop === 'border-radius') {
      const radius = { '8px':'var(--radius-sm)', '12px':'var(--radius-md)', '18px':'var(--radius-lg)', '24px':'var(--radius-xl)' };
      if (radius[decl.value]) decl.value = radius[decl.value];
    }
  });
  root.walkAtRules(rule => { if (rule.nodes && !rule.nodes.length) rule.remove(); });
  root.walkComments(comment => { if (/hero|arrow|portrait|Full-bleed/.test(comment.text)) comment.remove(); });
  const result = root.toString();
  fs.writeFileSync(file, result);
  records.push({file, before:original.length, after:result.length});
}
fs.writeFileSync('artifacts/release-hardening/style-refactor.json', JSON.stringify(records, null, 2));
