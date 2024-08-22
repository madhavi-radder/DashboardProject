import {React,useState} from 'react'
import { GoChevronRight } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = ({setquery}) => {
  return (
  <>
  <div className='w-full'> 
<div className='flex items-center justify-between w-[90%] mx-auto mt-4 mb-4'>
    <div className='flex items-center gap-2'>
        <p className='text-[#b3b8be] text-sm font-poppins-medium cursor-pointer'>Home</p>
        <GoChevronRight className='text-[#b3b8be] w-5 h-5'/>
<p className='text-[#3f6180] text-sm font-poppins-bold'>Dashboard</p>
        </div>
        <div className='w-[60%] flex items-center justify-between'>
            <div className='w-[60%]  bg-[#f0f5fa] border-2 gap-1 rounded-[6px] px-2 border-[#deebfe] flex items-center py-1'><IoMdSearch size={'22px'} className='text-[#b8c7d6]' />


                <input type='search' onChange={(e)=>setquery(e.target.value)} className=' w-[90%] border-0 focus:outline-0 bg-[#f0f5fa] text-[13px] font-poppins-medium' placeholder='Search anything...'/>
            </div>
            <div className='w-[40%] flex items-center gap-10 justify-end'>
            <MdOutlineNotificationsActive  className='text-[#cfdbe3] cursor-pointer' size={'22px'}/>
            <FaUserCircle  className='text-[#cfdbe3] cursor-pointer' size={'22px'} />

            </div>
            

        </div>


</div>
    </div>
  </>
  )
}

export default Header