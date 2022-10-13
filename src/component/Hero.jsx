import React,{useEffect} from 'react';
import Stats from './stat';
import Quality from '../assets/Quality.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
      useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className='md:flex mt-5'>
      <div className={'flex-1 flex-col px-6 md:ml-6 ml-2'}>
        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 text-[52px] text-[#452c3c] leading-[65px]
            tracking font-poppins font-semibold'>
                The Most <br className='sm:block hidden'/>
                <span className='text-[#e17c18] tracking-wide text-[45px] tracking'>Comfortable
                </span>
                <br/>
                Chair for you
            </h1>
        </div>
        <p className={'max-w-[440px] font-poppins mt-5 scale-in'}>
            Find the most comfortable chairs to 
            support your activities.We only 
            provide the best chairs from around the world
        </p>
            <div className='flex flex-row mt-5'>
            <button type='submit'
            className='gradient h-8 text-white rounded-full border-none
            scale-in w-[100px] '>
                shop Now
            </button>
            <div className='flex'>
                <p className='ml-10 scale-in'>Learn More</p>
            </div>
        </div>
       <Stats/>
      </div>
      <div data-aos="flip-right"
          data-aos-duration="1000"
          className=' mt-14 md:mt-0'>
  <img
      src={Quality}
      className='w-[450px] h-[500px] mr-10 image mt-10 md:mt-0'/>
      </div>
    </section>
  )
}

export default Hero
