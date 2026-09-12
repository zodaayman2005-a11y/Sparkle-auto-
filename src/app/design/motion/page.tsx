import { notFound } from "next/navigation";
import { MotionLab } from "@/components/MotionLab";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ count?: string }>;
}) {
  if (process.env.NODE_ENV !== "development") notFound();
  const q = await searchParams;
  return <MotionLab count={q.count === "0" ? 0 : q.count === "1" ? 1 : 2} />;
}
