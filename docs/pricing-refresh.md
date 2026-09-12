# Pricing comparison refresh

- Removed the pricing subtitle in Arabic and English at the user's request.
- Explicit product scope: Operations = management system; Growth = system + customer app; Expansion = multi-branch management.
- Aligned plan rows using CSS subgrid; consistent separate cards for plans and optional services. Stacked layout below 1100px avoids cramped comparison columns.
- Existing prices, billing calculations, features and review links preserved.
- Validation: npm run lint and npm run build passed (including TypeScript and assets check).
- Playwright: Arabic/English at 1440, 1024, 768, 390 and 320px; no document overflow or pageerror events; monthly/yearly switching passed in all ten configurations. Desktop CTA top coordinates identical across three cards in each locale.
- Render captures: artifacts/pricing-refresh/. Desktop pricing and add-on captures visually inspected. These are local lab checks, not field performance or a complete accessibility audit.
