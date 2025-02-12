// @/app/(public)/profile/components/MPCard.tsx

import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

interface MPCardProps {
  name: string
  party: string
  nextElectionDate: string
  constituency: string
  imageUrl: string
}

export const MPCard: FC<MPCardProps> = ({ name, party, nextElectionDate, constituency, imageUrl }) => {
  // Retrieve the classes for both the ring and bar from one place
  const { ring, bar } = getPartyColours(party)

  return (
    <div className='relative flex w-full max-w-sm items-center rounded border bg-white shadow-sm transition duration-500 hover:cursor-pointer hover:shadow-lg'>
      {/* Accent bar on the left (use the 'bar' class) */}
      <div className={clsx('h-full w-2', bar)} />

      {/* Main Content */}
      <div className='flex w-full items-center p-4'>
        {/* MP Image with ring */}
        <div className='relative mr-4 h-16 w-16 flex-shrink-0'>
          <div className={clsx('absolute -inset-1 rounded-full ring-2', ring)} />
          <Image src={imageUrl} alt={name} fill className='rounded-full object-cover' />
        </div>

        {/* Text content */}
        <div className='flex flex-col'>
          <div className='font-bold text-gray-800'>{name}</div>
          <div className='text-sm text-gray-600'>{party}</div>
          <div className='mt-1 text-sm text-gray-500'>{nextElectionDate}</div>
          {/* Dashed separator */}
          <hr className='my-2 w-full border-dashed border-gray-300' />
          <div className='text-sm text-gray-700'>{constituency}</div>
        </div>
      </div>

      {/* Arrow on the right */}
      <div className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          strokeWidth={1.5}
          stroke='currentColor'
          viewBox='0 0 24 24'
          className='h-5 w-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </div>
    </div>
  )
}
