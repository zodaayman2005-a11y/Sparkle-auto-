import { Website } from "./Website";
import type { Locale } from "@/content/site";
export function Landing({ locale }: { locale: Locale }) {
  return <Website locale={locale} />;
}

