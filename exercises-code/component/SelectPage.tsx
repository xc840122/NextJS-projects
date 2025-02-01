'use client'

import Link from "next/link"

type link = {
  href: string,
  label: string,
}

const navLinks: link[] = [
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forget-password', label: 'Forget' },
]

function SelectPage({
  pathName
}: {
  pathName: string,
}) {
  // check current url
  // const pathName = usePathname();
  // console.log(pathName)
  return (
    <div>
      {
        navLinks.map(link => {
          const isActive = pathName === link.href ||
            (pathName.startsWith(link.href) && pathName !== "/");
          return (
            <button
              className={`mx-4 ${isActive ? "bg-green-500" : "bg-red-700"}`}
              key={link.label}>
              <Link href={link.href} replace>{link.label}</Link>
            </button >
          )
        })
      }
    </div>
  )
}

export default SelectPage
