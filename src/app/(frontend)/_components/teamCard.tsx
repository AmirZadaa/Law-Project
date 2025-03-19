'use client'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { imageSizes } from './imageSizes'
import AboutLawer from './aboutLawer'
import { Lawyer } from './type'

interface TeamCardProps {
  lawyer: Lawyer
}

const TeamCard: React.FC<TeamCardProps> = ({ lawyer }) => {
  const [displayModel, setDisplayModel] = useState(false)
  const sizes = useMemo(
    () => ({
      '2xl': { padding: 18, cols: 3, gap: 4 },
      xl: { padding: 18, cols: 3, gap: 4 },
      lg: { padding: 18, cols: 2, gap: 4 },
      md: { padding: 8, cols: 2, gap: 4 },
      sm: { padding: 8, cols: 1, gap: 2 },
      xs: { padding: 8, cols: 1, gap: 2 },
    }),
    [],
  )

  return (
    <div
      className="bg-foreground space-y-8 max-sm:space-y-4 max-xs:p-4 p-8 text-center max-sm:mx-4 shadow-lg rounded-lg overflow-hidden"
      onClick={() => setDisplayModel(true)}
    >
      <div className=" relative hover:scale-95 hover:opacity-90 transition-all cursor-pointer aspect-square max-w-75 min-w-60px mx-auto">
        <Image
          alt="Team Member"
          src={lawyer.image}
          sizes={imageSizes(sizes)}
          placeholder="blur"
          onError={(e) => {
            e.currentTarget.src = '/fallbackImage.png'
          }}
          blurDataURL="/fallbackImage.png"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="text-text">
        <h1 className="text-xl font-semibold">{lawyer.name}</h1>
        <p className="">{lawyer.position}</p>
      </div>
      <AboutLawer isOpen={displayModel} onClose={() => setDisplayModel(false)} lawyer={lawyer} />
    </div>
  )
}

export default TeamCard
