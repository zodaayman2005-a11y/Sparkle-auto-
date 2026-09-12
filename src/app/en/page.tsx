import { Landing } from "@/components/Landing";
import { localeMetadata } from "@/content/seo";
export const generateMetadata = () => localeMetadata("en");
export default function Page() {
  return <Landing locale="en" />;
}
