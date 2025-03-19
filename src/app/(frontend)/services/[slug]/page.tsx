import { Metadata } from 'next'
import TeamHeader from '../../_components/teamHeader'
import { SERVICES } from '../../data'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((service) => service.slug === slug)

  return {
    title: service ? `Waqar Law - ${service.heading}` : 'Service Not Found',
    description: service
      ? `WAQAR LAW Advocates and Consultants - ${service.heading}`
      : 'Service details not available',
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES.find((service) => service.slug === slug)

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="space-y-12">
      <TeamHeader title={service.heading} bgimg={service.image} />
      <div className="text-center container mx-auto w-1/2 text-xl max-2xl:text-lg max-lg:w-[70%] max-md:text-base max-md:w-[80%] max-sm:w-full max-sm:px-2">
        {service.details}
      </div>
    </div>
  )
}
