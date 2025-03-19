import React from 'react'
import TeamCard from './teamCard'
import { LAWYERS } from '@/app/(frontend)/data'
import { Lawyer } from './type'

const TeamMember = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-2">
      {LAWYERS.sort((a, b) => a.id - b.id).map((lawyer: Lawyer, i: number) => (
        <TeamCard key={i} lawyer={lawyer} />
      ))}
    </div>
  )
}

export default TeamMember
