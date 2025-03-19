import React from 'react'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="relative aspect-[1920/300] w-full">
      <Image src="/logo2.svg" alt="Logo" fill priority className="object-cover dark:hidden" />
      <Image
        src="/Logo-white.svg"
        alt="Logo"
        fill
        priority
        className="object-cover hidden dark:block"
      />
    </div>
  )
}
