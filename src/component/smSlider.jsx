import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import Chairone from '../assets/Chairone.jpg';
import Chairtwo from '../assets/Chairtwo.jpg';
import Chairthree from '../assets/Chairthree.jpg';
import Chairfour from '../assets/Chairfour.jpg';
import chairfive from '../assets/chairfive.jpg';
const Chair =() => {
  return ( <>
       <h1 data-aos="zoom-in"
      className='text-[#e17c18] text-[40px] ustify-center 
      align-center font-poppins font-semibold text-center 
      md:hidden mt-[100px]'>Shop
        <span 
        className='text-[#452c3c] px-4'>popular</span><br/>
        categories</h1>
    <Splide
      options={ {
        gap: '1.0rem',
        perMove: 1,
        height:'300px',
      } }
      aria-label="Chair Images"
      className='md:hidden'   
      data-aos="fade-up"
     data-aos-duration="1000"
    >
      <SplideSlide className='' >
        <img src={Chairone} 
         className='h-[250px]'
        alt="Image 1"/>
        <h1 className='text-[#e17c18]'>
          Minimalist Chair</h1>
        <p>indoor chair</p>
      </SplideSlide>
      <SplideSlide>
        <img src={Chairtwo}
        className='h-[250px]'
         alt="Image 2"/>
        <h1 className='text-[#e17c18]'>
          Work Space chair</h1>
        <p>indoor chair</p>
      </SplideSlide>
      <SplideSlide>
        <img src={Chairthree} 
        className='h-[250px]'
        alt="Image 3"/>
        <h1 className='text-[#e17c18]'>
          Ultrabar Chair</h1>
        <p>indoor chair</p>
      </SplideSlide>
       <SplideSlide>
        <img src={Chairfour} 
        className='h-[250px]'
        alt="Image 4"/>
        <h1 className='text-[#e17c18]'>
          Office Chair </h1>
        <p>indoor chair</p>
      </SplideSlide>
       <SplideSlide>
        <img src={chairfive} 
        alt="Image 5"
        className='h-[250px]'/>
        <h1 className='text-[#e17c18]'>
          Babies Chair</h1>
        <p>indoor chair</p>
      </SplideSlide>
    </Splide>
    </>
  );
}
export default Chair