import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeContactSection = () => {
  return (
    <div className="container mx-auto space-y-8 max-sm:space-y-6 lg:p-12 p-2 py-6 max-md:py-2">
      <h1 className="text-5xl max-md:text-4xl font-bold">
        Ready to
        <br />
        <span>work with us?</span>
      </h1>
      <Link href={'/contact-us'}>
        <Button className="bg-text border-background border-2 hover:border-text max-md:text-lg cursor-pointer text-background hover:bg-background group transition-all duration-300 ease-in-out hover:text-text text-xl p-6">
          Read more{' '}
          <MoveRight className="size-6 max-md:size-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" />
        </Button>
      </Link>
    </div>
  )
}

export default HomeContactSection
