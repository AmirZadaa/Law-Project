'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { SERVICES, QUICK_LINKS, NAVIGATION_ITEMS } from '../data'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SideBar from './sideBar'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  const handlePracticeAreasClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      const practiceAreasSection = document.getElementById('practice-areas')
      practiceAreasSection?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (href: string) => {
    // Exact match for home page
    if (href === '/' && pathname === '/') return true

    // Partial match for other pages
    if (href !== '/' && pathname.startsWith(href)) return true

    return false
  }

  return (
    <div className="p-8 max-xl:p-6 sticky top-0 z-30 py-6 rounded-b-lg bg-foreground px-14 flex justify-between mx-auto">
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right">
          <SideBar
            SERVICES={SERVICES}
            QUICK_LINKS={QUICK_LINKS}
            NAVIGATION_ITEMS={NAVIGATION_ITEMS}
          />
        </SheetContent>
      </Sheet>
      <div className="flex items-center">
        <Link href={'/'}>
          <div className="relative w-70 max-xl:w-60 max-lg:flex-auto aspect-[1920/300]">
            <Image src={'/logo.webp'} alt="logo" priority fill className="object-contain" />
          </div>
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-8 max-xl:gap-2 max-lg:hidden">
          <NavigationMenuItem>
            <Link
              href={'/'}
              className={`cursor-pointer text-lg max-xl:text-base hover:bg-accent hover:text-accent-foreground p-2 rounded-md ${
                isActive('/') ? 'font-bold' : ''
              }`}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={'/services'}>
              <NavigationMenuTrigger
                aria-label="Services Menu"
                className={`cursor-pointer text-lg font-normal max-xl:text-base bg-foreground p-2 rounded-md ${
                  isActive('/services') ? 'font-bold' : ''
                }`}
              >
                Services
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid gap-1.5 p-5 overflow-auto max-h-120 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {SERVICES.map((service) => (
                  <li className="row-span-3" key={service.slug}>
                    <NavigationMenuLink asChild className="text-lg">
                      <Link
                        href={`/services/${service.slug}`}
                        key={service.heading}
                        className="block hover:bg-accent hover:text-accent-foreground rounded p-1.5"
                      >
                        {service.heading}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-foreground font-normal max-xl:text-base text-lg ">
              Quick Links
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-64 space-y-1">
                {QUICK_LINKS.map((link) => (
                  <Link
                    href={link.links}
                    key={link.title}
                    target="_blank"
                    className="block hover:bg-accent hover:text-accent-foreground text-lg rounded p-1.5"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.label === 'Practice Areas' ? (
                <Link
                  href="/#practice-areas"
                  onClick={handlePracticeAreasClick}
                  className={`cursor-pointer text-lg hover:bg-accent max-xl:text-base hover:text-accent-foreground p-2 rounded-md 
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link href={item.href}>
                  <span
                    className={`cursor-pointer text-lg hover:bg-accent max-xl:text-base hover:text-accent-foreground p-2 rounded-md ${
                      isActive(item.href) ? 'font-bold' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Header
