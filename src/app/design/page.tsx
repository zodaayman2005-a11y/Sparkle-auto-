import { DesignLab } from "@/components/DesignLab";
import { notFound } from "next/navigation";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ locale?: string; variant?: string }>;
}) {
  if (process.env.NODE_ENV !== "development") notFound();
  const q = await searchParams;
  return (
    <DesignLab
      locale={q.locale === "en" ? "en" : "ar"}
      variant={q.variant === "b" ? "b" : "a"}
    />
  );
}
