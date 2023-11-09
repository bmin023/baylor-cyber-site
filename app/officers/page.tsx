import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Officer } from "@/types/cyber"
import Image from "next/image"
import { remark } from "remark"
import html from "remark-html"

const ProfilePic = ({ officer, className }: { officer: Officer, className?: string }) => {
  if (!officer.profilePicUrl) {
    return null
  }
  return (
    <div className={ cn("flex w-fit items-center justify-center rounded-full bg-primary p-1.5",className) }>
      <Image alt={`picture of our ${officer.role}, ${officer.name}`} src={officer.profilePicUrl} className="h-32 w-32 text-clip rounded-full shadow-xl" />
    </div>

  )
}

const OfficerCard = ({ officer, left }: { officer: Officer, left: boolean }) => {
  const Bio = () => officer.bio ? remark().use(html).processSync(officer.bio).toString() : "no bio"

  const flexShift = cn({ "justify-end text-right": !left }, { "justify-start text-left": left })
  return (
    <div className={cn("flex w-full", flexShift)}>
      <div className="w-fit max-w-xl">
        <ProfilePic officer={officer} className={cn({"ml-auto":!left})}/>
        <hgroup>
          <h2 className="text-4xl">
            {officer.name}
          </h2>
          <p className="text-lg font-semibold">{officer.classification} {officer.major} Major, {officer.role}</p>
          { officer.links.length > 0 &&
            <div className={cn("flex gap-2",flexShift)}>{officer.links.map(link=>
              <a className="underline hover:text-accent-foreground" rel="noreferrer" target="_blank" href={link.href}>{link.name}</a>)}
            </div>
          }
        </hgroup>
        {officer.bio && <p dangerouslySetInnerHTML={{__html:Bio()}}></p>}
        { officer.contacts.length > 0 &&
          <div>{officer.contacts.map(contact => <p><b>{contact.name}:</b> {contact.value}</p>)}</div>
        }
      </div>
    </div>
  )
}

export default function Officers() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex w-full max-w-5xl flex-col gap-2 p-4">
        <h1 className="text-5xl font-extrabold">Officers</h1>
        {siteConfig.officers.map((officer, i) => <OfficerCard officer={officer} left={i % 2 === 0} />)}
      </div>
    </section>
  )
}
