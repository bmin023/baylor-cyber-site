import { StaticImageData } from "next/image"

export type Classification ="Freshman" | "Sophomore" | "Junior" | "Senior" | "Grad Student"

export type OfficerLink = {
  name: string
  href: string
}

export type OfficerContact = {
  name: string
  value : string
}

export type Officer = {
  name: string
  major: string
  role: string
  bio?: string
  links: OfficerLink[]
  contacts: OfficerContact[]
  classification: Classification
  profilePicUrl?: StaticImageData
}
