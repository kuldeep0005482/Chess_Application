import React from 'react'
import LogoSection from './LogoSection'
import UserProfile from './UserProfile'
import MenuList from './MenuList'
import BottomSection from './BottomSection'
function Sidebar() {
  return (
    <div className='w-64 h-screen bg-[#0f172a] text-gray-300 flex flex-col p-4'>
      <LogoSection />
      <UserProfile />
      <MenuList />
      <div className="mt-auto">
        <BottomSection />
      </div>
    </div>
  )
}

export default Sidebar