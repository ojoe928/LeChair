import {useState} from 'react';
import {Navlinks} from './Text';
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import Logo from '../assets/Logo.png';

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
   <nav className='w-full flex py-6
    justify-between items-center navbar'>   
     <img 
     src={Logo} alt='logo'
     className="h-[32px] w-[124px] ml-10"/>

   <ul className='w-3/4 flex list-none sm:flex 
   hidden justify-end items-center '>
    {Navlinks.map((navs,index)=>{
       return <li 
        key ={navs.id} 
        className={`font-poppins font-normal 
        cursor-pointer text-[16px] text-black mr-10`}>
          <a href={`#${navs.id}`} 
          className='text-black'>
            {navs.title}</a>
        </li>
      })}
    </ul> 
    <div className='sm:hidden flex flex-1 justify-end 
    items-center'>
  <button className='color w-[38px] h-[38px]
  object-contain mr-10' onClick={()=>setToggle((prev)=>!prev)}>
    {toggle?<FaTimes/>:<FaBars/>}
  </button>
  <div 
  className={`${toggle ?'flex flex-col':'hidden'} p-6 
  absolute top-20 right-0 bg-gray-100 mx-4 my-2 min-w-[140px] 
 rounded-xl sidebar z-40`}
>
   <ul className='md:w-3/4 flex list-none flex-col
   justify-end items-center z-40 '>
    {Navlinks.map((navs,index)=>{
       return <><li 
        key ={navs.id} 
        className={`font-poppins font-normal 
        cursor-pointer text-[18px] text-[#452c3c]
        mr-0`}
        >
          <a href={`#${navs.id}`}>
            {navs.title}</a>
        </li>
        </>
      })}
    </ul> 
</div>
</div>
 <button type='button'
    className='gradient w-[100px] h-8 text-[16px] 
    font-poppins font-normal text-white mr-10 
    rounded-[30px] md:block justify-center hidden'>
      Register
 </button>

    </nav>
  )
};
export default Nav
