import { Officer } from "@/types/cyber"
import BrendonProfile from "@/public/brendon_profile.png"
import MattProfile from "@/public/matt_profile.png"
import AaronProfile from "@/public/aaron_profile.png"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Cyber @ Baylor",
  description:
    "The public website for the cybersecurity club at Baylor Univeristy.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Officers",
      href: "/officers"
    }
  ],
  officers: [
    {
      name: "Matt Homan",
      role: "President",
      major: "Management Information Systems",
      classification: "Senior",
      contacts: [
        {
          name: "Email",
          value: "Matt_Homan1@baylor.edu"
        }
      ],
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/matt-homan/"
        }
      ],
      profilePicUrl: MattProfile
    },
    {
      name: "Brendon Kofink",
      role: "Vice President",
      major: "Computer Science",
      bio: `I found Cybersecurity my freshman year at Baylor and I am so glad
        I did! Through this club, I have found amazing friends and have
        learned so much about this field. I have been given the chance to
        compete on our CCDC team for two years and have been the captain
        of our NCL team for two seasons now! I have ranked in the **top 0.1%**
        of NCL players nationally in the standard bracket. I also created this site.`,
      classification: "Junior",
      contacts: [
        {
          name: "Email",
          value: "Brendon_Kofink2@baylor.edu"
        }
      ],
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/brendon-kofink-bb68a6227/"
        },
        {
          name: "GitHub",
          href: "https://github.com/bmin023"
        }
      ],
      profilePicUrl: BrendonProfile
    },
    {
      name: "Bryant Huang",
      role: "Secretary",
      major: "Computer Science",
      classification: "Junior",
      contacts: [],
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/bryant-huang-bu/"
        }
      ]
    },
    {
      name: "Aaron Sierra",
      role: "Treasurer",
      major: "Computer Science",
      classification: "Junior",
      bio: `The cyber security club is very rigirous but incredibly fun and rewarding. Because of competitions
      in the Cyber Security club I was offered a position at General Motors my Softmore year as a Cyber Security Analyst. 
      If you are intrested in Cyber Security and want to be successful this is the place to be.`,
      contacts: [
        {
          name: "Email",
          value: "aaron_sierra1@baylor.edu"
        }
      ],
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/aaronsierra1/"
        }
      ],
      profilePicUrl: AaronProfile
    }
  ] as Officer[]
}
