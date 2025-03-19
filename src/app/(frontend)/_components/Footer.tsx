import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-text mt-4">
      <div className="container mx-auto  text-background grid lg:grid-cols-3 grid-cols-1 gap-8 py-20 lg:px-12 px-2">
        <div className="lg:col-span-2 space-y-5">
          <Link href={'/'}>
            <div className="relative max-lg:flex-auto aspect-[1920/300]  w-90 max-xl:w-70">
              <Image src={'/Logo-white.svg'} alt="logo" fill className="object-contain" />
            </div>
          </Link>
          <p className="text-lg max-sm:text-sm pt-4 text-background">
            We are committed to providing bespoke practical solutions for individuals and
            businesses, balancing our emphasis on innovation with the ground realities our clients
            face.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Lahore Office</h1>
          <div className="w-30 h-0.5 bg-popover"></div>
          <div className="space-y-3">
            <Link
              href={'https://www.google.com/maps?q=31.5611457824707,74.3149185180664'}
              target="_blank"
              className="flex items-center gap-2 hover:text-accent-foreground"
            >
              <MapPin />
              Al-vakeel building, 9 fane road, Lahore
            </Link>
            <p className="flex items-center gap-2">
              <Phone />
              Tel: 042-37239991
            </p>
            <Link
              href="mailto:info@waqarlaw.com"
              className="flex items-center gap-2 hover:text-accent-foreground "
            >
              <Mail />
              Email: info@waqarlaw.com
            </Link>
            <p className="flex items-center gap-2">
              <Phone />
              Number: +92303-4243958
            </p>
          </div>
          <div className="pt-4">
            <h1 className="text-xl max-sm:text-lg font-semibold">Powered By</h1>
            <Link href={'https://nexusberry.com/'} target="_blank">
              <span className="text-sm hover:text-accent-foreground">
                Nexusberry Training and Solutions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
