import { pair } from "./site";

// Owner-supplied pricing image, 1 November 2026. Amounts are EGP.
// Owner also explicitly confirmed the first six months of purchase maintenance are free.
export const pricingTerms = { trialDays: 14, maintenanceAfterMonths: 6, minimumSubscriptionMonths: 12, maintenanceIncludedInSubscription: true };
export const pricingOptions = [
  { id: "car-wash", title: pair("مغسلة سيارات", "Car wash"), oneTime: 7500, installmentCount: 3, installmentAmount: 2500,
    maintenance: 350, monthly: 800, extraBranchOnce: 3500, extraBranchMaintenance: 150, extraBranchSubscription: 400 },
  { id: "ppf", title: pair("مركز PPF", "PPF centre"), oneTime: 10000, installmentCount: 3, installmentAmount: 3334,
    maintenance: 550, monthly: 1100, extraBranchOnce: 5000, extraBranchMaintenance: 250, extraBranchSubscription: 600 },
] as const;
// Owner explicitly confirmed 3 × 3,334 for PPF (10,002 total), as pictured.

// Capabilities already described in the maintained Platform page and FAQs.
export const pricingIncludedFeatures = [
  pair("الحجز والجدول ومتابعة التشغيل", "Bookings, schedules & operations"),
  pair("الشيفتات والصلاحيات والرواتب", "Shifts, permissions & payroll"),
  pair("المالية والمخزون والتقارير", "Finance, inventory & reports"),
  pair("العملاء والحملات والولاء", "Customers, campaigns & loyalty"),
  pair("تجربة حجز باسم نشاطك", "Branded customer booking experience"),
  pair("صندوق واتساب ودعم المنصة", "WhatsApp inbox & platform support"),
] as const;
