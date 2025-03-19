import React from 'react'
import TeamMember from '../_components/teamMember'
import TeamHeader from '../_components/teamHeader'
import TeamIntroMessage from '../_components/TeamIntroMessage'
import { Arbitration } from '../_assets/images'

export const metadata = {
  title: 'Waqar-Law -Team',
  description: 'WAQAR LAW Advocates and Consultants - Team',
}

const page = () => {
  const data = {
    title: 'Our Approach',
    details:
      ' In litigation, we are tenacious advocates who dissect complexities to build compelling cases. In advisory matters, we act as strategic partners, guiding clients through transactions with meticulous attention to detail and long-term commercial objectives. By blending rigorous legal analysis with pragmatic problem-solving, we transform challenges into opportunities - delivering resolutions that safeguard assets, reputations, and futures.',
  }
  return (
    <div className="space-y-12">
      <TeamHeader title={'Our Team'} bgimg={Arbitration} />
      <TeamIntroMessage title={data.title} details={data.details} />
      <TeamMember />
    </div>
  )
}

export default page
