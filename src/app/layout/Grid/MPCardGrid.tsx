// @/app/(public)/profile/components/MPCardGrid.tsx
import { MPCard } from '@/components/MPCard'
import { FC } from 'react'

interface MPData {
  id: string
  name: string
  party: string
  nextElectionDate: string
  constituency: string
  imageUrl: string
}

type MPCardGridProps = {
  data: MPData[]
}

export const MPCardGrid: FC<MPCardGridProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data.map(mp => (
        <MPCard
          key={mp.id}
          name={mp.name}
          party={mp.party}
          nextElectionDate={mp.nextElectionDate}
          constituency={mp.constituency}
          imageUrl={mp.imageUrl}
        />
      ))}
    </div>
  )
}
