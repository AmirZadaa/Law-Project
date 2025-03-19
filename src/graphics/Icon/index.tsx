import Image from 'next/image'
import React from 'react'

export const Icon = () => {
  return (
    <div className="relative aspect-[500/220] w-full">
      <Image src="/favicon.svg" alt="Icon" fill priority className="object-cover dark:hidden" />
      <Image
        src="/favicon-dark.svg"
        alt="Icon"
        fill
        priority
        className="object-cover hidden dark:block"
      />
    </div>
  )
}
