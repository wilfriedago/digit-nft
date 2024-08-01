import NextLink from "next/link"

const isLocalLink = (href?: string) => href && (href.startsWith("/") || href.startsWith("#"))

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & {
  title?: string
  openInNewTab?: boolean
  ignoreNextLink?: boolean
}

export const Link = ({ href, target, prefetch, rel, ...props }: Readonly<LinkProps>) => {
  // FIXME: Make sure that this is the correct way to get the href, and that it is not a security risk
  const linkHref = href instanceof Object ? (href.pathname ?? "") : href

  const { openInNewTab = !isLocalLink(linkHref), ignoreNextLink, ...rest } = props

  // Next.js Link does not scroll to elements with id
  const LinkComponent = linkHref.includes("#") || ignoreNextLink ? "a" : NextLink

  let prefetchValue

  if (LinkComponent !== "a") {
    if (target === "_blank") prefetchValue = false
    else prefetchValue = prefetch
  }

  return (
    <LinkComponent
      {...rest}
      href={linkHref}
      prefetch={prefetchValue}
      {...(openInNewTab ? { target: "_blank", rel: `${rel ?? ""} noopener noreferrer`.trim() } : {})}
    />
  )
}
