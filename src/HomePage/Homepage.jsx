import React from 'react'
import Navbar from './Navbar'
import Avatar from '../assets/Avatar.png'
import ReactIcon from '../assets/ReactIcon.png'
import HTMLIcon from '../assets/HTMLICON.png'
import JSIcon from '../assets/JSICON.png'
import CSSIcon from '../assets/CSSICON.png'
import Img1 from '../assets/Img1.png'
import Img2 from '../assets/Img2.png'
import ViewIcon from '../assets/View.png'
import LogoIcon from '../assets/Logo Icon.png'
import EmailIcon from '../assets/EmailIcon.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TypeAnimation } from 'react-type-animation'
import { useRef } from 'react'
import InstaIcon from '../assets/Instagram.png'
import LinkedIcon from '../assets/linkedin.png'
import FaceIcon from '../assets/facebook.png'

const Homepage = () => {

  // SCROLLING REFS
  const ContactRef = useRef(null)
  const ProjectRef = useRef(null)
  const ExperienceRef = useRef(null)

  // SCROLLING FUNCTIONS
  const scrollToContact = () => {
    console.log(ContactRef.current)
    ContactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const scrollToProject = () => {
    ProjectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const scrollToExperience = () => {
    ExperienceRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  // GSAP ANIMATIONS
  useGSAP(() => {
    gsap.from('#p1', {
      x: -500,
      duration: 0.4,
      stagger: 0.4
    })

    gsap.from('#i1', {
      x: -500,
      duration: 0.4,
      stagger: 0.4
    })
  })


  return (
    <div>
      {/* NAVBAR */}
      <div><Navbar scrollToContact={scrollToContact} scrollToExperience={scrollToExperience} scrollToProject={scrollToProject} /></div>

      
      {/* MAIN BODY */}
      <div className='bg-[#161513] w-full h-full'>




        {/* HERO SECTION */}
        <div>
          <div id='i1' className='flex items-center justify-center'><img className='lg:h-[180px] h-[150px] mt-10' src={Avatar} alt="" /></div>
          <div id='p1' className='flex flex-col items-center justify-center mt-5 font-Poppins font-extrabold text-white lg:text-4xl text-3xl'>
            <span>I do code and</span>
            <span>make content <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660] from-0% to-100% to-[#9A33FF]'>about it</span>!</span>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <div className='break-words lg:flex lg:flex-col justify-center items-center text-[#C5C5C5] lg:w-[1000px] md:w-[500px] w-[300px] lg:text-base  text-[12px] mt-5'>Hi, I’m Masab Ahmed, a Full Stack Developer specializing in building efficient web applications with JavaScript, React, and Node.js. <span> I’m passionate about creating seamless user experiences and solving complex problems.</span></div>
          </div>
        </div>
        <div className='flex items-center justify-center lg:mt-10  mt-10'>
          <div><button onClick={scrollToContact} className='p-3 w-[150px] rounded-3xl font-semibold font-Poppins cursor-pointer bg-white text-black'>Get In Touch</button></div>
        </div>
        <div className='flex flex-col items-center justify-center mt-16'>
          <div className='text-xl font-Poppins text-[#C5C5C5]'>EXPERIENCE WITH</div>
          <div className='mt-5'>
            <ul className='flex items-center gap-10 justify-center'>
              <li><img className='h-8' src={ReactIcon} alt="" /></li>
              <li><img className='h-8' src={JSIcon} alt="" /></li>
              <li><img className='h-8' src={HTMLIcon} alt="" /></li>
              <li><img className='h-8' src={CSSIcon} alt="" /></li>
            </ul>
          </div>
        </div>


        {/* PROJECT SECTION */}
        <div className='flex items-center justify-center mt-16'>
          <div ref={ProjectRef} className='font-Poppins font-extrabold text-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF8660]  to-[#D5491D] text-4xl'>PROJECTS</div>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='lg:flex flex flex-col lg:flex-row justify-around items-center lg:p-0 px-5 mt-10 gap-10'>
            <li>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7296279845456474113/"><div>
                <img className='h-44 w-[380px]' src={Img2} alt="" />
                <div className='bg-[#2A2A2A] h-[55px] flex items-center'>
                  <div className='flex flex-col text-white p-2'>
                    <span className='font-Poppins font-extrabold'>QUICKKEY</span>
                    <span className='text-sm font-semibold font-Poppins'>Click To View</span>
                  </div>
                </div>
              </div></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/posts/masab-ahmed-411a8729b_reactjs-tailwindcss-employeemanagement-activity-7276552382212153344-XZjr/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiYoY0B7XhzgDTQKa2eJS0EEOARKzcZS24"><div>
                <img className='h-44 w-[380px]' src={Img1} alt="" />
                <div className='bg-[#2A2A2A] h-[55px] flex items-center'>
                  <div className='flex flex-col text-white p-2'>
                    <span className='font-Poppins font-extrabold'>STAFF SYNC</span>
                    <span className='text-sm font-semibold font-Poppins'>Click To View</span>
                  </div>
                </div>
              </div></a>
            </li>
          </ul>
        </div>



        {/* EXPERIENCE SECTIONS */}
        <div>
          <div ref={ExperienceRef} className='font-Poppins font-extrabold flex items-center justify-center mt-16 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#5BADFF]  to-[#1373D1]'>EXPERIENCE</div>
        </div>
        <div className='flex items-center flex-col justify-center mt-10'>
          <div className='flex justify-between items-center lg:p-0 px-5 md:w-[500px]  lg:w-[700px]'>
            <div className='flex items-center gap-5'>
              <img className='h-8' src={LogoIcon} alt="" />
              <span className='lg:text-lg text-sm font-Poppins  font-bold text-white'>Full Stack Developer at DevSynx</span>
            </div>
            <div className='text-[#8491A0] text-sm'>Jan 2025 - Present</div>
          </div>
          <div className='flex items-center justify-center lg:w-full'>
            <p className='flex items-center justify-center lg:w-[700px] md:w-[500px] w-[300px] ml-5  lg:mb-32 mb-32 mt-3 text-[#8491A0] lg:text-sm text-xs'>I am currently working as a Full Stack Developer at DevSynx, where I design and build scalable web applications using technologies like HTML, CSS, JavaScript, Node.js, MongoDB, and MySQL. I collaborate with teams to deliver high-quality, responsive solutions, continuously refining my skills in both front-end and back-end development.</p>
          </div>
        </div>
      </div>








      {/* FOOTER/CONTACT SECITON */}
      <footer ref={ContactRef} className='bg-[#191919] lg:h-[50vh]'>
        <div>
          <div className='flex items-center justify-center'>
            <div className='mt-18 font-Poppins text-bold text-2xl text-white'>Contact</div>
          </div>
          <div className='flex items-center flex-col justify-center'>
            <div className='lg:w-[875px] mt-2'>
              <div className='text-[#C5C5C5] text-sm lg:p-0 px-5'>Hi, I’m Masab Ahmed, a Full Stack Developer specializing in building efficient web applications with JavaScript, React, and Node.js.
                I’m passionate about creating seamless user experiences and solving complex problems.</div>
              <div>
                <div className='mt-10'>
                  <div className='flex lg:p-0 px-5 lg:mb-0 mb-32   items-center gap-3'>
                    <img src={EmailIcon} alt="" />
                    <span className='text-xs text-[#C5C5C5] font-bold font-Poppins'>Masabayan15@gmail.com</span>
                  </div>
                  <div>
                    <ul className='flex items-center gap-5 p-5 lg:p-0 mt-4'>
                      <li><a href="https://www.linkedin.com/in/masab-ahmed-411a8729b" target='_blank' rel='noopener noreferrer'><button className='cursor-pointer'><img className='h-5' src={LinkedIcon} alt="" /></button></a></li>
                      <li><a href="https://www.instagram.com/masabahmed/" target='_blank' rel='noopener noreferrer'><button className='cursor-pointer'><img className='h-5' src={InstaIcon} alt="" /></button></a></li>
                      <li><a href="https://www.facebook.com/masab.ayan/" target='_blank' rel='noopener noreferrer'><button className='cursor-pointer'><img className='h-5' src={FaceIcon} alt="" /></button></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
