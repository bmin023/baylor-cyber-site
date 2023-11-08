export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Baylor Cyber",
  description:
    "We're baylor cyber. We do stuff",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about"
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
