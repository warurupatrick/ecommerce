import {assets} from '../assets/assets';
import { NavLink } from 'react-router-dom';
import Home from './../Pages/Home';
import Collections from './../Pages/Collections';
import { useState } from 'react';
const Navbar = () => {

  const[menu,setMenu]=useState("")



  return ( 
    <div  className="flex items-center justify-between py-5 font-medium"      >

     <img src={assets.logo}  className='w-36' alt="" />

  <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
        
        <NavLink to=''className='flex flex-col items-center gap-1' >
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>

        <NavLink to='/collections'  className='flex flex-col items-center gap-1'      >
          <p>COLLECTIONS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>

        <NavLink to='/about'  className='flex flex-col items-center gap-1' >
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact'  className='flex flex-col items-center gap-1' >
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
 
    </ul>

<div className='flex items-center gap-6' >
  <img src={assets.search_icon} className='w-5 cursor-pointer'  w-5  alt="" />

   <div className='group relative'  >
    <img src={assets.profile_icon} alt=""  className='w-5 cursor-pointer' />
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-0 ' ></div>
   </div>

</div>




    </div>
  )
}

export default Navbar