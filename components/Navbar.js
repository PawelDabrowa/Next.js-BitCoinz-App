
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [navbar,setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
 <>
  <nav className={`navbar sticky top-0 flex items-center justify-between flex-wrap p-6 ${navbar ? ' bg-red-100'  : ' bg-transparent' }`}>
  <div className={ `run ${navbar ? 'on' :'off'}`}>
    <button className="flex items-center px-3 py-2 border rounded text-teal-900 border-teal-900 hover:text-black hover:border-blue">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`flex-grow justify-start flex text-center items-center w-auto menu ${navbar ? 'on' :'off'}`}>
    <div className="m-auto">
    <Link href="/"><a href="#responsive-header" className="inline-block text-center mt-0 text-teal-900 hover:text-white text-xl mr-4">
       Home
      </a></Link>
      <Link href="about"><a href="#responsive-header" className="inline-block mt-0 text-teal-900 text-xl hover:text-white text-center mr-4">
      About
      </a></Link>
      <Link href="anime"><a href="#responsive-header" className=">text-center inline-block mt-0 text-teal-900 text-xl hover:text-white mr-4">
      Animation
      </a></Link>
    </div>
  </div>
</nav>

  <style jsx>{`

    .run.on,
    .menu.off {
      display: none;
    }
  
  `}</style>
  </>
  )};

export default Navbar;