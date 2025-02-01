'use client'
import { usePathname } from "next/navigation";
import SelectPage from "@/component/SelectPage";


export default function AuthPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div>
      <SelectPage pathName={pathName} />
      {children}
    </div>
  );
}
