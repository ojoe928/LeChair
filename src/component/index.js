import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import Slider from './Slider';
import Chair from './smSlider';
import Choose from './Chooseus';
import Features from './Features';
import  Getstarted from './Getstarted'
import Footer from './Footer';

const Index = () => {
  return (
    <>
     <Nav/>
      <Hero/>
       <Slider/>
       <Chair/>
        <Choose/>
         <Features/>
            <Getstarted/>
             <Footer/>
     
    </>
  )
}

export default Index
