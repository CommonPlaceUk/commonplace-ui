import { FC, ReactNode } from 'react'

type ProfileLayoutProps = {
  children: ReactNode
}

const ProfileLayout: FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50'>
      {/* Left Sidebar (15%) */}
      <aside className='w-[15%] px-4 py-8'>
        <section>Placeholder for sidebar content, links, user info, etc.</section>
      </aside>

      {/* Main Content (60%) */}
      <main className='container mx-auto bg-white p-8'>{children}</main>

      {/* Secondary Content (25%) */}
      <aside className='w-[25% bg-gray-50 px-4 py-8'>
        <section>Placeholder for additional info / ads / related content</section>
      </aside>
    </div>
  )
}

export default ProfileLayout
