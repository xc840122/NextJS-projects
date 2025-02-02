'use client'

import Link from "next/link"

function SelectPage({
  isActive,
  link,
}: {
  isActive: boolean,
  link: { href: string, label: string }
}) {
  return (
    <button
      className={`mx-4 ${isActive ? "bg-blue-700" : "bg-blue-500"}`}
      key={link.label}>
      <Link href={link.href} replace>{link.label}</Link>
    </button >
  )
}

export default SelectPage
