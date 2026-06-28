import PublicLayout from "@/components/layouts/public/PublicLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLayout>{children}</PublicLayout>;
}