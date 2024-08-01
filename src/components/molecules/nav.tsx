"use client"

import { usePathname } from "next/navigation"

import { Link } from "@/components/atoms"
import { cx } from "@/utils/cx"

type NavItemProps = React.ComponentProps<"li"> & {
  href: string
  active?: boolean
}

const NavItem = ({ href, active, children, ...props }: Readonly<NavItemProps>) => {
  return (
    <li className="font-semibold hocus:text-neutral-800/90" {...props}>
      <Link aria-current={active ? "page" : undefined} title={`Navigate to ${children?.toString()} page`} href={href}>
        {children}
      </Link>
    </li>
  )
}

type NavProps = React.ComponentProps<"nav"> & {
  links: { title: string; href: string }[]
}

export const Nav = ({ links, className, ...props }: Readonly<NavProps>) => {
  const pathname = usePathname()

  return (
    <nav {...props}>
      <ul className={cx("flex gap-7", className)}>
        {links.map((link) => (
          <NavItem key={link.title} href={link.href} active={pathname === link.href}>
            {link.title}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}
