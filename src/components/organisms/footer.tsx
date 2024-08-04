import { Image, Link } from "@/components/atoms"
import { Nav } from "@/components/molecules"
import { PAGES } from "@/shared/constants"

const navigationLinks = [
  { title: "Privacy", href: PAGES.PRIVACY },
  { title: "Terms & Conditions", href: PAGES.TERMS },
  { title: "About Us", href: PAGES.ABOUT }
]

export const Footer = () => {
  return (
    <footer id="footer" className="mx-3 divide-y px-2 md:mx-8 lg:mx-28">
      <div className="flex pb-3.5">
        <Link title="Navigate to Home page" href={PAGES.HOME} className="size-9">
          <Image src="/icons/logo.svg" alt="@wilfriedago" width={36} height={36} />
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-4 py-8 lg:flex-row">
        <p className="font-semibold">Create Explore & Collect Digital NFTs</p>
        <Nav links={navigationLinks} />
      </div>
    </footer>
  )
}
