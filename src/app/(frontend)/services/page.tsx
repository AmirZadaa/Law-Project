import React from 'react'
import TeamIntroMessage from '../_components/TeamIntroMessage'
import TeamHeader from '../_components/teamHeader'
import { AviationLaw } from '../_assets/images'
import ServiceCard from '../_components/ServiceCard'

export const metadata = {
  title: 'Waqar-Law - Services',
  description: 'WAQAR LAW Advocates and Consultants - Services',
}

const page = () => {
  const data = {
    title: '',
    details:
      'At the heart of our practice is a philosophy of partnership. We collaborate closely with clients to design strategies that address immediate needs while advancing long-term objectives. From intricate corporate transactions to high-stakes disputes, our unwavering commitment to integrity, excellence, and client success drives outcomes that deliver tangible value.',
  }
  return (
    <div>
      <TeamHeader title={'Services'} bgimg={AviationLaw} />
      <TeamIntroMessage title={data.title} details={data.details} />
      <ServiceCard />
    </div>
  )
}

export default page
