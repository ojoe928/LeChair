import React from 'react';
import { Choose } from './Text';
import Man from '../assets/man.png'
const Chooseus = () => {
  return (
    <section className='md:flex md:my-10 '>
      <div data-aos="fade-right"
        data-aos-easing="ease-in-sine">
        <img 
        src={Man}
        className='md:ml-10  my-10 md:my-0 h-[500px] w-[400px]'/>
        </div>
        <div className='md:ml-[200px]'>
          <h1
          data-aos="fade-right"
           data-aos-easing="ease-in-sine"
          className='text-[#452c3c] text-[36px] 
           font-poppins font-semibold md:ml-10 ml-2'>Why
          <span className='text-[#e17c18] px-2'>choose</span>
            us?</h1>
          <p 
          data-aos="fade-right"
         data-aos-easing="ease-in-sine"
          className='max-w-[550px] font-poppins my-5 md:ml-10 ml-0'>
            Our product are of the best quality that is suitable for all
             activities for you, this is the reason why you consider use
              as your coice 
              </p>
          <div className='container'>
            {Choose.map((chooseUs)=>{ 
               const {id,img,Label,content}=chooseUs;
              return <>
              <div
              data-aos="fade-right"
               data-aos-easing="ease-in-sine"
               className='' key={id}>
                <img src={chooseUs.img}
                className='md:ml-10 ml-2 w-[50px] h-[50px] icon'/>                  
                  <h1  
                  className={`font-poppins 
                  font-normal text-[26px] py-4 px-4
                  md:py-0 px-0
                  text-black md:ml-10 ml-0 text-[#452c3c]`}>
                    {chooseUs.Label} 
                      <p
                    className='text-[#8F838A] text-[14px] 
                    max-w-[300px] font-bold'>{chooseUs.content}</p></h1>
                     </div>
                     </>
            })}
            </div>
            </div>
    </section>
  )
}
export default Chooseus
