import React from 'react'
import ReachUsSection from './_components/ReachUsSection'
import TeamIntroMessage from '../_components/TeamIntroMessage'
import TeamHeader from '../_components/teamHeader'
import { Arbitration } from '../_assets/images'

export const metadata = {
  title: 'Waqar-Law -Contact Us',
  description: 'WAQAR LAW Advocates and Consultants -Contact Us',
}

const ContactUsPage = () => {
  return (
    <div>
      <TeamHeader title={'Contact Us'} bgimg={Arbitration} />
      <TeamIntroMessage
        title=""
        details="Our commitment to excellence, integrity, and client success is the cornerstone of our practice. We aim to be your trusted legal partner, offering the highest standards of legal service while protecting what matters most to you"
      />
      <ReachUsSection />
    </div>
  )
}

export default ContactUsPage
