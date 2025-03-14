import React from 'react'
import Logo from '../assets/logo.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = ({scrollToContact, scrollToProject, scrollToExperience}) => {

  useGSAP(()=>{
    gsap.from('#nav-items', {
      y: 20,
      stagger: 1,
      duration: 0.5,
      opacity: 0
    })

    gsap.from('#name', {
      y: 20,
      stagger: 1,
      opacity: 0,
      duration: 0.5
    })

  })

  return (
    <div className='bg-[#222222] w-[100vw] h-[8.218vh]'>
        <div className='flex justify-around items-center h-full'>
          <div id='name' className='text-white font-Urbanist font-bold'>Masab</div>
          <div>
            <ul id='nav-items' className='flex lg:gap-10 gap-2 lg:text-base text-xs font-Jakarta text-white'>
              <li><a href="/"><button className='cursor-pointer'>Home</button></a></li>
              <li><button onClick={scrollToProject} className='cursor-pointer'>Projects</button></li>
              <li><button onClick={scrollToExperience} className='cursor-pointer'>Experience</button></li>
              <li><button onClick={scrollToContact} className='cursor-pointer'>Contact</button></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
