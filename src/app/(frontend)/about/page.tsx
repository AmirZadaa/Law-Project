import React from 'react'
import TeamHeader from '../_components/teamHeader'
import { Arbitration } from '../_assets/images'
import TeamIntroMessage from '../_components/TeamIntroMessage'
import HomeContactSection from '../_components/HomeContactSection'

const Page = () => {
  return (
    <div>
      <TeamHeader title={'About Us'} bgimg={Arbitration} />
      <TeamIntroMessage
        title={'Why WL?'}
        details={
          'For over two decades, Waqar Law has delivered strategic, client-centric solutions across diverse legal domains. Our commitment to excellence, innovation, and integrity ensures that we protect what matters most to you—whether navigating growth, resolving disputes, or safeguarding rights. Trust us to be your advocate, advisor, and partner in every legal challenge.'
        }
      />
      <div className="container mx-auto px-12 max-md:px-2 py-10">
        <h1 className="text-4xl max-md:text-3xl font-bold">
          Waqar Law, Advocates & Legal Consultants
        </h1>
        <p className="text-xl max-md:text-lg mt-4">
          Founded in 2002, Waqar Law (WL) has established itself as a trusted legal partner,
          offering tailored solutions for both contentious and non-contentious matters. Our team of
          seasoned lawyers combines deep expertise with a pragmatic, results-driven approach,
          prioritizing efficiency, competitive pricing, and proactive strategies. We excel in
          meticulous preparation and trial-readiness, ensuring robust advocacy for clients
          navigating complex legal challenges.
        </p>
        <p className="text-xl max-md:text-lg mt-4">
          At the heart of our practice is a philosophy of partnership. We collaborate closely with
          clients to design strategies that address immediate needs while advancing long-term
          objectives. From intricate corporate transactions to high-stakes disputes, our unwavering
          commitment to integrity, excellence, and client success drives outcomes that deliver
          tangible value.
        </p>
      </div>
      <HomeContactSection />
    </div>
  )
}

export default Page
