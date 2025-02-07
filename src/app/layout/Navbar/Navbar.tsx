'use client'

import Link from 'next/link'
import { FC } from 'react'
import { NavBarProps } from './types'

export const NavBar: FC<NavBarProps> = ({ navItems }) => {
  return (
    <header className='w-full bg-white px-8 py-4 shadow'>
      <nav className='max-w-8xl mx-auto flex items-center justify-between px-4 py-3'>
        {/* Left: Brand / Logo */}
        <div className='flex items-center space-x-2'>
          <span className='text-primary text-xl font-semibold tracking-wide'>
            Common<span className='text-secondary'>Place</span>
          </span>
        </div>

        {/* Center: Nav Items */}
        <ul className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
          {navItems.map(item => (
            <li key={item.label}>
              <Link href={item.href} className='hover:text-primary p-4 text-gray-600 transition-colors'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Log in or other CTA */}
        <div>
          <Link href='/login' className='text-secondary hover:text-primary p-4'>
            Log in
          </Link>
        </div>
      </nav>
    </header>
  )
}
