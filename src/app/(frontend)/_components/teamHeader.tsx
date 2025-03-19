import { StaticImageData } from 'next/image'
import React from 'react'

const TeamHeader = ({
  title,
  bgimg,
}: {
  title: string
  bgimg: StaticImageData | { src: string; height: number; width: number; blurDataURL: string }
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgimg.src})` }}
      className="bg-cover bg-center bg-fixed h-140 max-lg:h-110 max-sm:h-90 max-xs:h-70 max-md:bg-scroll"
    >
      <div className="bg-accent flex flex-auto justify-center items-center text-card text-center font-semibold h-full">
        <h1 className="text-5xl max-lg:text-3xl text-foreground max-md:text-2xl max-xs:font-semibold">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default TeamHeader
