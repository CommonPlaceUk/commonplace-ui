// @/app/(public)/profile/page.tsx
import { MPCardGrid } from '@/app/layout/Grid/MPCardGrid'
import { FC } from 'react'

const mockData = [
  {
    id: '1',
    name: 'McDonald, Andy',
    party: 'Labour',
    nextElectionDate: '5 February 2025',
    constituency: 'Middlesbrough and Thornaby East',
    imageUrl: '/images/andy.jpg'
  },
  {
    id: '2',
    name: 'Sultana, Zarah',
    party: 'Independent',
    nextElectionDate: '5 February 2025',
    constituency: 'Coventry South',
    imageUrl: '/images/zarah.jpg'
  },
  {
    id: '3',
    name: 'Whittome, Nadia',
    party: 'Labour',
    nextElectionDate: '5 February 2025',
    constituency: 'Nottingham East',
    imageUrl: '/images/nadia.jpg'
  }
  // ... add as many as needed
]

const ProfilePage: FC = () => {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-semibold'>All MPs</h2>
      <MPCardGrid data={mockData} />
    </section>
  )
}

export default ProfilePage
