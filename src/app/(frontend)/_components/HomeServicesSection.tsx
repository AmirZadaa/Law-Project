import Image from 'next/image'
import React from 'react'
import { CAPABILITIES } from '../data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

const HomeServicesSection = () => {
  return (
    <div className="container mx-auto lg:px-12 px-2 space-y-6 max-md:space-y-3">
      <div className="flex max-md:flex-col max-md:space-y-2 justify-between">
        <h1 className="text-5xl max-md:text-4xl font-bold">Our Capabilites</h1>
        <p className="w-1/2 max-md:w-full text-accent text-xl max-lg:text-lg leading-6">
          The firm&rsquo;s lawyers collaborate in various areas of practice to produce innovative
          legal solutions, and to provide the capabilities necessary to generate desirable results,
          for our clients.
        </p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2">
        {CAPABILITIES.map((capability) => (
          <div
            key={capability.id}
            className="space-y-5 hover:bg-foreground rounded-lg border-1 border-dotted p-2"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={capability.image}
                alt={capability.title}
                className="rounded-lg object-cover"
                placeholder="blur"
                blurDataURL="/fallbackImage.png"
                sizes="(max-width: 1024px) 50vw, (max-width: 640px) 100vw, 25vw"
                fill
              />
            </div>
            <div className="space-y-2 text-lg max-md:leading-6 text-accent">
              <h1 className="text-3xl font-semibold text-text">{capability.title}</h1>
              <p>{capability.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href={'/services'} className="flex md:justify-end">
        <Button className="bg-text border-background border-2 hover:border-text max-md:text-lg cursor-pointer text-background hover:bg-background group transition-all duration-300 ease-in-out hover:text-text text-xl p-6">
          Show All Services{' '}
          <MoveRight className="size-6 max-md:size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" />
        </Button>
      </Link>
    </div>
  )
}

export default HomeServicesSection
