import { notFound } from "next/navigation";
import { Website } from "@/components/Website";
import { websitePages } from "@/content/website";
import { localeMetadata } from "@/content/seo";

type Props = { params: Promise<{ page: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return websitePages.filter(item => item.slug).map(item => ({ page: item.slug })); }
export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  const selected = websitePages.find(item => item.slug === page && item.id !== "home");
  if (!selected) notFound();
  return localeMetadata("en", selected.id);
}
export default async function Page({ params }: Props) {
  const { page } = await params;
  const selected = websitePages.find(item => item.slug === page && item.id !== "home");
  if (!selected) notFound();
  return <Website locale="en" page={selected.id} />;
}
