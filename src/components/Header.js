import React from 'react';
import {Link} from 'react-scroll'
import { motion } from 'framer-motion';



export default function Header() {
  return (
      <div id='main'>
        <div className='name' >
          <motion.h1 animate={{x:100}} >hello</motion.h1>
          <motion.h1 animate={{x:100}} >Ste[ UPP Your Fitness</motion.h1>
          <motion.h1 animate={{x:100}} >Wtih us</motion.h1>
           <h2>STEP UP YOUR</h2>
            <h1><span>FITNESS</span> WITH US</h1>
            <p  className='details'> <b> "Sweat Is Your Only Proof"</b></p>
            <div className='header-btns'>
               <Link  to='contact' className='header-btn'>JOIN US</Link>
            </div>
        </div>
       
      </div>
  )
}

