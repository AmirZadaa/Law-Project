import { StaticImageData } from 'next/image'

export interface Lawyer {
  id: number
  name: string
  title: string
  image: StaticImageData
  position: string
  education: string
  bio: string
}

export interface Services {
  id: number
  heading: string
  slug: string
  details: string
  image: StaticImageData
}

export interface QuickLinks {
  title: string
  links: string
}

export interface NavigationItems {
  label: string
  href: string
  type: string
}

export interface Capabilities {
  id: number
  title: string
  description: string
  image: StaticImageData
}

export interface PracticeAreas {
  id: number
  title: string
  slug: string
  list: string[]
  img: StaticImageData
}
