import React from 'react'
import { CgProfile } from "react-icons/cg";
const Navbar=()=>{
  return (
    <div className="flex justify-between items-center py-3 px-5 bg-blue-500 w-full max-iphone:px-2">
      <div className='logo font-bold text-4xl max-iphone:text-2xl'>iTask</div>
      <ul className="menu flex gap-4 text-xl items-center max-iphone:text-sm max-iphone:gap-2">
        <li className='cursor-pointer hover:font-bold transition-all font-sans'>Progress</li>
        <li className='cursor-pointer'><CgProfile className='size-8'/></li>
      </ul>
    </div>
  )
}
export default Navbar