import React from 'react'
import Marquee from "react-fast-marquee";

function Header() {
  return (
    <>
    <div className='w-full h-10 bg-[#ffebe9] pl-4 pt-2'>
    <Marquee>
     <p className='text-[#8e160b]'>Header</p>
    </Marquee>
    </div>
    </>
  )
}

export default Header
