import { Landing } from "@/components/Landing";
import { localeMetadata } from "@/content/seo";
export const generateMetadata = () => localeMetadata("ar");
export default function Page() {
  return <Landing locale="ar" />;
}
