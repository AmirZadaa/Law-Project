import React from 'react'
import Image from 'next/image'
import { SERVICES } from '../data'
import Link from 'next/link'

const ServiceCard = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 space-y-12 max-xl:space-y-10 gap-8 max-xl:gap-6 max-sm:gap-4 max-sm:space-y-6 max-xs:space-y-4 max-xs:gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {SERVICES.map((service) => (
        <Link href={`/services/${service.slug}`} key={service.slug}>
          <div className="space-y-8 max-sm:space-y-4 bg-foreground rounded-md p-4 max-sm:m-2 max-xs:p-2 hover:scale-95 cursor-pointer hover:opacity-90 transition-all">
            <div className="relative aspect-video w-full">
              <Image src={service.image} alt="Arbitration" className="object-cover" />
            </div>
            <div className="space-y-4 max-xl:space-y-3 max-xs:space-y-2 text-pretty">
              <h1 className="font-bold text-3xl max-xl:text-2xl max-xs:text-xl">
                {service.heading}
              </h1>
              <p className="text-lg max-xs:text-base line-clamp-2">{service.details}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ServiceCard
