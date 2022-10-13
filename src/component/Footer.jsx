import React from 'react'
import Logo from   '../assets/Logo.png'
const Footer = () => {
  return (
    <footer className="text-center lg:text-left mt-10 bg-gray-100 text-gray-600"> 
  <div className="mx-6 py-12 text-center md:text-left">
    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="">
        <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
            md:ml-5
          ">
         <img src={Logo} alt='logo'/>
        </h6>
        <p 
        data-aos="fade-right"
          data-aos-duration="1000"
          className='w-[250px] md-ml-0 ml-10'>
          Our Vision is to help you make the best chair for you,
           your family,and relative  
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          About
        </h6>
        <p className="mb-4">
          <a href="#!" class="text-gray-600">About Us</a>
        </p>
        <p className="mb-4">
          <a href="#!" class="text-gray-600">Features</a>
        </p>
        <p className="mb-4">
          <a href="#!" class="text-gray-600">News & Blog</a>
        </p>
      </div>
      <div 
      data-aos="fade-right"
          data-aos-duration="1000"
          className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Company
        </h6>
        <p className="mb-4">
          <a href="#!" class="text-gray-600">How We Work ?</a>
        </p>
        <p className="mb-4">
          <a href="#!" class="text-gray-600">Capital</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">Security</a>
        </p>
      </div>
      <div  data-aos="fade-left"
        data-aos-duration="1000">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Support
        </h6>
        <p className="flex items-center justify-center md:justify-start mb-4">
        FAQ
        </p>
        <p className="flex items-center justify-center md:justify-start mb-4">
          Support
        </p>
        <p className="flex items-center justify-center md:justify-start mb-4">
            Contact Us
        </p>
      </div>
    </div>
  </div>
  <div className="text-center p-6 bg-gray-200">
    <span>© 2021 Copyright:</span>
    <a className="text-gray-600 font-semibold" href="https://tailwind-elements.com/">LeChair Website</a>
  </div>
</footer>
  )
}

export default Footer
