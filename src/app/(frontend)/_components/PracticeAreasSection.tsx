import Image from 'next/image'
import React from 'react'
import { PRACTICE_AREAS } from '../data'
import Link from 'next/link'

const PracticeAreasSection = () => {
  return (
    <div
      className="container text-center mx-auto px-12 max-md:px-2 space-y-8 max-md:space-y-4"
      id="practice-areas"
    >
      <h1 className="text-5xl max-md:text-4xl max-sm:text-2xl font-bold">Practice Areas</h1>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-md:gap-4 max-sm:gap-2">
        {PRACTICE_AREAS.map((item) => (
          <Link href={`/${item.slug}`} key={item.slug}>
            <div
              key={item.id}
              className="space-y-5 max-sm:space-y-3 hover:bg-foreground text-2xl max-md:text-xl max-sm:text-lg font-mono p-4"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  placeholder="blur"
                  blurDataURL="/fallbackImage.png"
                  sizes="(max-width: 768px) 70vw, 30vw"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h1>{item.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PracticeAreasSection
