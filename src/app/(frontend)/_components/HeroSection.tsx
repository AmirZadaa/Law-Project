'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import HeroImg from './HeroImg'
import { Arbitration, AviationLaw, BankingFinance } from '../_assets/images'
import Autoplay from 'embla-carousel-autoplay'

const heroData = [
  {
    heading: 'WAQAR LAW & Co.',
    details: '"Extremely responsive with practical answers to legal questions." ',
    link: '/about',
    bgImg: Arbitration,
  },
  {
    heading: 'Corporate Legal Consultants',
    details: 'Well acquainted with the banking sector and is very approachable."',
    link: '/services',
    bgImg: AviationLaw,
  },
  {
    heading: 'Barristers And Advocates',
    details:
      '"All team members, especially the partners are very hands on and plugged in to every assignment."',
    link: '/our-team',
    bgImg: BankingFinance,
  },
]

const HeroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true, playOnInit: true }))
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => {
        plugin.current.reset()
        plugin.current.play()
      }}
    >
      <CarouselContent>
        {heroData.map((hero, index) => (
          <CarouselItem key={index}>
            <HeroImg
              heading={hero.heading}
              details={hero.details}
              link={hero.link}
              bgImg={hero.bgImg}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default HeroSection
