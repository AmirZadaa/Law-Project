import React from 'react'
import Image from 'next/image'
import { Lawyer } from './type'

interface AboutLawerProps {
  isOpen: boolean
  onClose: () => void
  lawyer: Lawyer
}

const AboutLawer: React.FC<AboutLawerProps> = ({ isOpen, onClose, lawyer }) => {
  return (
    <div
      className={`w-full h-full fixed top-0 left-0 z-40 flex justify-center items-center ${isOpen ? 'bg-(--accent) overflow-auto max-sm:overflow-hidden' : 'bg-transparent pointer-events-none'} transition-all duration-300`}
    >
      {isOpen && (
        <div
          className="bg-foreground rounded-2xl max-sm:rounded-none text-text w-[70%] max-md:h-[99%] max-sm:w-full  max-md:my-2  overflow-y-auto max-xl:w-[80%] max-lg:py-2 max-lg:px-4 px-8 py-6 max-xl:py-4 max-xl:px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end md:hidden">
            <button
              className="bg-text text-background  cursor-pointer max-sm:my-2 hover:bg-accent rounded-xl px-3 mb-1 py-1 max-sm:px-2 max-sm:py-1"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="flex gap-10 max-md:flex-col max-xl:gap-8 max-lg:gap-4 max-md:gap-2">
            <div className="relative aspect-[2/3] max-md:aspect-square max-md:min-w-full max-h-[60%] max-w-2/5 min-w-1/3">
              <Image
                alt="Team Member"
                src={lawyer.image}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                onError={(e) => {
                  e.currentTarget.src = '/fallbackImage.png'
                }}
                blurDataURL="/fallbackImage.png"
                fill
                className="object-cover "
              />
            </div>
            <div className="self-start w-2/3 space-y-4 text-start max-md:space-y-2 max-md:w-full">
              <div className="flex justify-between">
                <h1 className="font-bold text-2xl max-xl:text-xl">{lawyer.name}</h1>
                <button
                  className="bg-text max-md:hidden text-background cursor-pointer max-sm:my-2 hover:bg-accent rounded-xl px-3 py-1 max-sm:px-2 max-sm:py-1"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
              <div className="flex gap-2">
                <h2 className="font-semibold text-xl max-lg:text-lg max-sm:text-base">
                  {lawyer.position}
                </h2>
                |
                <h2 className="font-semibold text-xl max-lg:text-lg max-sm:text-base">
                  {lawyer.title}
                </h2>
              </div>
              <hr />
              <p className="text-lg max-lg:text-base max-sm:text-sm">{lawyer.bio}</p>
              {lawyer.education && (
                <ul>
                  <h3 className="font-semibold text-xl mb-4 max-md:mb-2 max-sm:text-base">
                    Education
                  </h3>
                  {lawyer.education.split(',').map((item, i) => (
                    <li key={i} className="list-inside list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutLawer
