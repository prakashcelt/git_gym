import React, { useRef, useEffect, useState } from "react";
import "./ImageSlider.css";
import { motion } from "framer-motion";
import imageus1 from "../images/DUS_4802.jpg";
import imageus2 from "../images/DUS_4825.jpg";
import imageus3 from "../images/DUS_4823.jpg";
import imageus4 from "../images/DUS_4821.jpg";
import imageus5 from "../images/DUS_4797.jpg";
import imageus6 from "../images/DUS_4799.jpg";
import imageus7 from "../images/DUS_4800.jpg";
import imageus8 from "../images/DUS_4813.jpg";
import imageus9 from "../images/DUS_4809.jpg";
import imageus10 from "../images/DUS_4807.jpg";

export default function ImageSlider() {
  
  const [Width, setWidth] = useState(0);
  const carousel = useRef();
  

  // const vary1 =(Width)=>{
  //   let newvary1 = carousel.current.scrollWidth - carousel.current.offsetWidth
  //   console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
  //   setWidth(newvary1)
  // }
  useEffect(() => {
    console.log(carousel.current.scrollWidth,carousel.current.offsetWidth )
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  

  return (
    <>
    {/* <button onDrag={vary1}> hello</button> */}
      <div className="yapp">
        <motion.div  ref={carousel} drag="x"  dragConstraints={{ right: 0, left: -Width }}   className="carousel"   whileTap={{ cursor: "grabbing" }}    >
           <motion.div className="itemss" key={imageus1}>
              <img src={imageus1} alt="" />
              <img src={imageus2} alt="" />
              <img src={imageus3} alt="" />
              <img src={imageus4} alt="" />
              <img src={imageus5} alt="" />
              <img src={imageus6} alt="" />
              <img src={imageus7} alt="" />
              <img src={imageus8} alt="" />
              <img src={imageus9} alt="" />
              <img src={imageus10} alt="" />
            
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="yapp">
        <motion.div  ref={carousel} drag="x"  dragConstraints={{ right: 0, left: -Width }}   className="carousel"   whileTap={{ cursor: "grabbing" }}    >
          <motion.div   drag="x"  dragConstraints={{ right: 0, left: -5000 }} className="inner-carousel"   >
            <motion.div className="itemss" key={imageus1}>
              <img src={imageus1} alt="" />
              <img src={imageus2} alt="" />
              <img src={imageus3} alt="" />
              <img src={imageus4} alt="" />
              <img src={imageus5} alt="" />
              <img src={imageus6} alt="" />
              <img src={imageus7} alt="" />
              <img src={imageus8} alt="" />
              <img src={imageus9} alt="" />
              <img src={imageus10} alt="" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div> */}
    </>
  );
}
