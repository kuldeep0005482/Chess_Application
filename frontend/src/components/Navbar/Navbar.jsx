import React from 'react'
import NavMenu from './NavMenu'
import RightSection from './RightSection'
import Logo from './Logo'
function Navbar() {
  return (
    <div className="w-full h-14 bg-[#0b132b] flex items-center justify-between px-6 border-b border-[#1f2a44] py-4">
        <Logo />
        <NavMenu />
        <RightSection />
    </div>
  )
}

export default Navbar