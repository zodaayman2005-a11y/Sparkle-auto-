import type { Locale } from "@/content/site";

export function PlatformNavigation({ locale, items }: { locale: Locale; items: Array<{ id: string; label: string }> }) {
  return <div className="mp-platform-nav-wrap"><nav className="shell mp-area-jumps" aria-label={locale === "ar" ? "أجزاء المنصة" : "Platform areas"}>
    {items.map((item, index) => <a key={item.id} href={`#${item.id}`}><span aria-hidden="true" dir="ltr">0{index + 1}</span>{item.label}</a>)}
  </nav></div>;
}
