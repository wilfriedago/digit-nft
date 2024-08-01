"use client"

import { useState } from "react"

import { Button, Image, Link } from "@/components/atoms"
import { Nav } from "@/components/molecules"
import { PAGES } from "@/shared/constants"
import { cx } from "@/utils/cx"

export const navigationLinks = [
  { title: "Home", href: PAGES.HOME },
  { title: "Top sales", href: PAGES.SALES },
  { title: "Collections", href: PAGES.COLLECTIONS },
  { title: "Our blog", href: PAGES.BLOG },
  { title: "About us", href: PAGES.ABOUT }
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header id="header" className="border-b border-neutral-50 py-3">
      <div className="flex items-center justify-between px-5 py-2 md:mx-6.5 lg:mx-20 lg:px-10 lg:py-4">
        <Link title="Navigate to Home page" href={PAGES.HOME} className="size-9">
          <Image src="/icons/logo.svg" alt="@wilfriedago" width={36} height={36} />
        </Link>

        <Nav className="pointer-events-auto hidden lg:flex" links={navigationLinks} />

        <div className="hidden items-center gap-5 lg:flex">
          <Button variant="unstyled" asChild>
            <Link href={PAGES.SIGNUP}>Sign up</Link>
          </Button>

          <span aria-hidden className="h-8 w-0.5 bg-neutral-800" />

          <Button className="rounded-full" asChild>
            <Link href={PAGES.WALLET}>Connect Wallet</Link>
          </Button>
        </div>

        <Button
          size="sm"
          variant="secondary"
          className="lg:hidden"
          onClick={handleToggleMenu}
          title={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}>
          <Image src={isMenuOpen ? "/icons/menu-open.svg" : "/icons/menu-close.svg"} width={20} height={20} alt="" />
        </Button>

        <div
          className={cx(
            "pointer-events-none fixed inset-0 flex flex-col gap-y-16 p-6.5 md:p-14 mt-20 bg-background",
            isMenuOpen ? "pointer-events-auto" : "hidden"
          )}>
          <Nav className="flex-col" links={navigationLinks} />

          <div className="flex items-center gap-5">
            <Button variant="unstyled" asChild>
              <Link href={PAGES.SIGNUP}>Sign up</Link>
            </Button>

            <span aria-hidden className="h-8 w-0.5 bg-neutral-800" />

            <Button className="rounded-full" asChild>
              <Link href={PAGES.WALLET}>Connect Wallet</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
