import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HomeLawyerSection() {
  return (
    <div className="bg-text">
      <div className="container mx-auto space-y-8 text-background lg:p-12 py-12 px-2">
        <div className="flex justify-between max-md:flex-col">
          <h1 className="text-5xl max-md:text-4xl font-bold">Meet Our People.</h1>
          <Link href={'/our-team'}>
            <Button className="bg-text border-background border-2 hover:border-text max-md:text-lg cursor-pointer text-background mt-10 max-md:mt-6 hover:bg-background group transition-all duration-300 ease-in-out hover:text-text text-xl p-6">
              Find a Lawyer{' '}
              <MoveRight className="size-6 max-md:size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" />
            </Button>
          </Link>
        </div>
        <hr className="bg-background h-0.5" />
        <div className="w-1/2 max-md:w-full max-sm:text-lg text-xl leading-6 text-accent-foreground">
          In litigation, we are tenacious advocates who dissect complexities to build compelling
          cases. In advisory matters, we act as strategic partners, guiding clients through
          transactions with meticulous attention to detail and long-term commercial objectives. By
          blending rigorous legal analysis with pragmatic problem-solving, we transform challenges
          into opportunities - delivering resolutions that safeguard assets, reputations, and
          futures.
        </div>
      </div>
    </div>
  )
}

export default HomeLawyerSection
