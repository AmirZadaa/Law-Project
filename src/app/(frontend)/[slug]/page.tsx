import React from 'react'
import { PRACTICE_AREAS } from '../data'
import TeamHeader from '../_components/teamHeader'
import TeamIntroMessage from '../_components/TeamIntroMessage'
import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const practiceArea = PRACTICE_AREAS.find((item) => item.slug === slug)

  return {
    title: practiceArea ? `Waqar Law - ${practiceArea.title}` : 'Practice Area Not Found',
    description: practiceArea
      ? `WAQAR LAW Advocates and Consultants - ${practiceArea.title}`
      : 'Practice Area details not available',
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const practiceArea = PRACTICE_AREAS.find((item) => item.slug === slug)

  if (!practiceArea) {
    return <div>Practice Area not found</div>
  }

  return (
    <div>
      <TeamHeader title={practiceArea.title} bgimg={practiceArea.img} />
      <TeamIntroMessage
        title={practiceArea.title}
        details={
          'Our clients rely on our in-depth knowledge of the law, strategic approach, and strong advocacy and advisory skills to protect their rights in complex disputes.'
        }
      />
      <Accordion
        type="single"
        collapsible
        className="grid grid-cols-2 max-md:grid-cols-1 max-lg:gap-2 gap-4 container mx-auto px-12 max-lg:px-8 max-sm:px-2 py-6"
      >
        {practiceArea.list.map((item) => (
          <AccordionItem value={item} key={item} className="bg-foreground p-4 max-sm:p-2">
            <AccordionTrigger className="text-2xl max-lg:text-xl max-sm:text-base">
              {item}
            </AccordionTrigger>
          </AccordionItem>
        ))}
      </Accordion>
      <TeamIntroMessage
        title="Our Approach"
        details="In litigation, we are tenacious advocates who dissect complexities to build compelling cases. In advisory matters, we act as strategic partners, guiding clients through transactions with meticulous attention to detail and long-term commercial objectives. By blending rigorous legal analysis with pragmatic problem-solving, we transform challenges into opportunities - delivering resolutions that safeguard assets, reputations, and futures."
      />
    </div>
  )
}
