import React from 'react'
import HeroSection from './_components/HeroSection'
import HomeAboutSection from './_components/HomeAboutSection'
import HomeLawyerSection from './_components/homeLawyerSection'
import HomeContactSection from './_components/HomeContactSection'
import HomeServicesSection from './_components/HomeServicesSection'
import PracticeAreasSection from './_components/PracticeAreasSection'

const Page = () => {
  return (
    <div className="space-y-10">
      <HeroSection />
      <HomeAboutSection />
      <HomeServicesSection />
      <PracticeAreasSection />
      <HomeLawyerSection />
      <HomeContactSection />
    </div>
  )
}

export default Page
