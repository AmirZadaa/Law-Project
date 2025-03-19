import React from 'react'
import ContactUsForm from './ContactUsForm'
import ReachUs from './ReachUs'

const ReachUsSection = () => {
  return (
    <div className="container mx-auto px-2 grid grid-cols-2 max-md:grid-cols-1 max-md:px-4 gap-24 max-lg:gap-12 my-8">
      <ContactUsForm />
      <ReachUs />
    </div>
  )
}

export default ReachUsSection
