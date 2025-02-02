'use client'
import { usePathname } from "next/navigation";
import SelectPage from "@/component/SelectPage";

type link = {
  href: string,
  label: string,
}

const navLinks: link[] = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forget-password', label: 'Forget' },
]

export default function AuthPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();

  return (
    <div>
      {navLinks.map(link => {
        const isActive = pathName === link.href || (pathName.startsWith(link.href) && pathName !== "/");
        return (
          <SelectPage key={link.label} isActive={isActive} link={link} />
        )
      })}
      {children}
    </div>
  );
}
