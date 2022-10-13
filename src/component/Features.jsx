import React from 'react'
import Lady from '../assets/Lady.png'
import {feature}from './Text'
const Features = () => {
  return (
    <section className='md:flex mt-10 md-my-20'>
      <div className=''>
        <h1
        data-aos="zoom-in-right"
         className='text-[#452c3c] text-[36px]
          md:ml-10 font-poppins font-semibold'>Best
           <span
        className='text-[#e17c18] px-1 font-poppins'>Features
        </span> From Us</h1>
        <p 
        data-aos="zoom-in-right"
        className='max-w-[480px] text-[#7A5C74]
         font-poppins my-5 md:ml-10'>
          We always provide the latest features that keep up with 
          the times in each of our product,you can find these  
          features in every product you buy 
        </p>
        <div 
        data-aos="zoom-in-right"
        className='flex flex-row'>
          {feature.map((Feature)=>{
           const {id,img,content}=Feature;
            return(
            <>
            <div className='ml-4 md:ml-0 mt-2' key={id}>
              <img src={Feature.img} 
              className='w-[100px] h-[70px] px-4 md:ml-10'/>
              <p className='max-w-[100px] text-[#8F838A] mt-2 px-4 md:ml-10 '>{Feature.content}</p>
            </div>
            </>
            )
          })}
        </div>
      </div>
      <img src={Lady}
      data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
      className='md:ml-[200px] mt-10 md:mt-0 w-[400px] h-[400px]'/>
    </section>
  )
}
export default Features;