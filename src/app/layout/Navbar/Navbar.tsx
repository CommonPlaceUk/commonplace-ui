'use client'

import Link from 'next/link'
import { FC } from 'react'
import { NavBarProps } from './types'

export const NavBar: FC<NavBarProps> = ({ navItems }) => {
  return (
    <header className='relative w-full bg-white px-8 py-4 shadow'>
      <nav className='mx-auto flex items-center justify-between px-4 py-3'>
        {/* Left: Brand / Logo */}
        <BrandLogo />

        {/* Search field */}
        <div className='flex-1 px-8'>
          <input
            type='search'
            placeholder='Search...'
            className='w-full rounded-md border border-gray-200 bg-white py-3 text-sm text-gray-700'
          />
        </div>

        {/* Center: Nav Items */}
        <ul className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
          {navItems.map(item => (
            <li key={item.label}>
              <Link href={item.href} className='p-4 text-gray-600 transition-colors hover:text-primary'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Log in or other CTA */}
        <button
          className='rounded-md border border-secondary px-4 py-2 text-center text-sm text-secondary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg focus:border-primary focus:bg-primary focus:text-white active:border-primary active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          Login
        </button>
      </nav>
    </header>
  )
}

export const BrandLogo: FC = () => {
  return (
    <div className='flex items-center space-x-2'>
      <span className='text-xl font-semibold tracking-wide text-primary'>
        Common<span className='text-secondary'>Place</span>
      </span>
    </div>
  )
}
