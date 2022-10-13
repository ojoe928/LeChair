import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Stat} from './Text';
const Stats = () => {
        useEffect(() => {
        AOS.init();
      }, [])
  return (
 <section data-aos="fade-up" className='flex-row mt-8 flex flex-rap mb-6'>
  {Stat.map((stats)=>{
    
    return <div key={stats.id} className='m-3'>
      <h4 className='text-[#452c3c] font-poppins font-semibold text-[30px] leading-[43px]'>
        {stats.value} 
        <span className='text-[#e17c18] text-[40px]'>{stats.add}</span>
      </h4>
      <p className='max-w-[100px] text-[#8F838A]'>{stats.title}</p>
    </div>
  })}
 </section>
  )
}

export default Stats