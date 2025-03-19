import React from 'react'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

const HeroImg = ({
  heading,
  details,
  link,
  bgImg,
}: {
  heading: string
  details: string
  link: string
  bgImg: StaticImageData | { src: string; height: number; width: number; blurDataURL: string }
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center bg-fixed h-140 max-lg:h-110 max-sm:h-90 max-xs:h-70 max-md:bg-scroll"
    >
      <div className="bg-accent text-card font-semibold h-full">
        <div className="md:w-1/2 mx-40 max-md:mx-auto max-md:text-center max-md:pt-25 pt-40 text-foreground space-y-4">
          <h1 className="text-5xl max-lg:text-3xl max-md:text-2xl">{heading}</h1>
          <p className="text-3xl max-lg:text-xl max-md:text-lg">{details}</p>
          <Link href={`${link}`}>
            <Button className="bg-text border-background border-2 hover:border-text max-md:text-lg cursor-pointer text-background hover:bg-background group transition-all duration-300 ease-in-out hover:text-text text-xl p-6">
              Read more{' '}
              <MoveRight className="size-6 max-md:size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
