import React from 'react'
import ReachUsCard from './ReachUsCard'
import { Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react'
import { title } from 'process'

const ReachUs = () => {
  const cardData = [
    {
      icon: (
        <Mail
          strokeWidth={1}
          className="bg-blue-500 fill-background p-2 size-12 stroke-blue-500 rounded-full"
        />
      ),
      title: 'Email',
      details: ['info@waqarlaw.com'],
      href: 'mailto:info@waqarlaw.com',
    },
    {
      icon: (
        <MessageCircleMore
          strokeWidth={2}
          className="bg-green-600 fill-green-600 p-2 size-12 stroke-background rounded-full"
        />
      ),
      title: 'Whatsapp',
      details: ['Number: +92303-4243958'],
    },
    {
      icon: (
        <MapPin
          strokeWidth={1}
          className="bg-blue-500 fill-background p-2 size-12 stroke-blue-400 rounded-full"
        />
      ),
      title: 'Visit Us',
      details: ['Al-vakeel building, 9 fane road, Lahore'],
      href: 'https://www.google.com/maps?q=31.5611457824707,74.3149185180664',
    },
    {
      icon: (
        <Phone
          strokeWidth={2}
          className="bg-green-600 fill-green-600 p-2 size-12 stroke-background rounded-full"
        />
      ),
      title: 'Phone',
      details: ['Tel: 042-37239991'],
    },
  ]

  return (
    <div className="space-y-3 max-md:space-y-2 max-md:text-center">
      <label className="text-xl font-bold">Ways To Reach Us</label>
      <h1 className="text-5xl max-md:text-2xl font-bold">We Would Love To Talk To You</h1>
      <ReachUsCard cardData={cardData} />
    </div>
  )
}

export default ReachUs
