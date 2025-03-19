import Image from 'next/image'
import React from 'react'
import { HomeAboutImage } from '../_assets/images'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

const HomeAboutSection = () => {
  return (
    <div className="bg-muted">
      <div className="container mx-auto p-12 max-md:px-2 py-16 grid lg:grid-cols-2 grid-cols-1 xl:gap-4 space-y-3 lg:gap-2">
        <div className="relative aspect-[384/337] w-[85%]">
          <Image
            alt="about"
            src={HomeAboutImage}
            placeholder="blur"
            blurDataURL="/fallbackImage.png"
            sizes="(max-width: 768px) 80vw, 40vw"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div>
            <h1 className="text-xl mb-1">About Us</h1>
            <h2 className="text-5xl max-lg:text-4xl font-bold">Leading Full Service Law Firm</h2>
          </div>
          <p className="mt-10 max-md:mt-6 text-lg text-accent leading-8">
            Founded in 2002, Waqar Law has grown into a full-service law firm known for delivering
            exceptional legal solutions in contentious and non-contentious matters. Over the years,
            we&rsquo;ve earned a reputation for providing personalized and targeted legal services
            with a clear commitment to efficiency and effectiveness. Our team of experienced lawyers
            combines a deep understanding of the legal landscape with a pragmatic and results-driven
            approach, ensuring that each client&apos;s unique needs are met with strategic
            precision.
          </p>
          <p className="mt-5 max-md:mt-6 text-lg text-accent leading-8">
            Our commitment to excellence, integrity, and client success is the cornerstone of our
            practice. We aim to be your trusted legal partner, offering the highest standards of
            legal service while protecting what matters most to you
          </p>
          <Link href={'/about'}>
            <Button className="bg-text border-background border-2 hover:border-text max-md:text-lg cursor-pointer mt-10 max-md:mt-6 text-background hover:bg-background group transition-all duration-300 ease-in-out hover:text-text text-xl p-6">
              Read more{' '}
              <MoveRight className="size-6 max-md:size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeAboutSection
