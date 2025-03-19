'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { SheetClose, SheetTitle } from '@/components/ui/sheet'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { VisuallyHidden } from './visuallyHidden'
import { NavigationItems, QuickLinks, Services } from './type'

const COMMON_LINK_CLASSES = 'block hover:bg-accent hover:text-accent-foreground rounded p-2'

// Generic type for CollapsibleSection
type CollapsibleSectionProps<T> = {
  title: string
  items: T[]
  renderItem: (item: T) => React.ReactNode
  href?: string
}

// Generic Collapsible Section Component
function CollapsibleSection<
  T extends { slug?: string; title?: string; label?: string; links?: string },
>({ title, items, renderItem, href }: CollapsibleSectionProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        {href ? (
          <SheetClose asChild>
            <Link href={href}>
              <h3 className="font-bold">{title}</h3>
            </Link>
          </SheetClose>
        ) : (
          <h3 className="font-bold">{title}</h3>
        )}
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </CollapsibleTrigger>

      <CollapsibleContent>
        {items.map((item) => (
          <SheetClose asChild key={item.slug || item.title || item.label || item.links}>
            {renderItem(item)}
          </SheetClose>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

// Sidebar Component with Typed Props
const SideBar = ({
  SERVICES,
  QUICK_LINKS,
  NAVIGATION_ITEMS,
}: {
  SERVICES: Services[]
  QUICK_LINKS: QuickLinks[]
  NAVIGATION_ITEMS: NavigationItems[]
}) => {
  return (
    <>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <div className="flex flex-col space-y-4 mt-8 overflow-auto p-4">
        {/* Typed Collapsible Section for Services */}
        <CollapsibleSection<Services>
          title="Services"
          items={SERVICES}
          href="/services"
          renderItem={(service) => (
            <Link href={`/services/${service.slug}`} className={COMMON_LINK_CLASSES}>
              {service.heading}
              <hr />
            </Link>
          )}
        />

        {/* Typed Collapsible Section for Quick Links */}
        <CollapsibleSection<QuickLinks>
          title="Quick Links"
          items={QUICK_LINKS}
          renderItem={(link) => (
            <Link href={link.links} target="_blank" className={COMMON_LINK_CLASSES}>
              {link.title}
              <hr />
            </Link>
          )}
        />

        {/* Navigation Items */}
        <div className="space-y-2">
          {NAVIGATION_ITEMS.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link href={item.href} className={COMMON_LINK_CLASSES}>
                <h3 className="font-bold">{item.label}</h3>
              </Link>
            </SheetClose>
          ))}
        </div>
      </div>
    </>
  )
}

export default SideBar
