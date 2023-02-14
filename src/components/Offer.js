import React from "react";
import { Link } from "react-scroll";

function Offer() {
  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span> FOR THIS SUMMER
        </h1>
        {/* <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p> */}
        <div className="pr-btns">
        <div >
               <Link  to='offerofficial' className='header-btn'>JOIN US</Link>
            </div>
        </div>
        I
      </div>
    </div>
  );
}
export default Offer;
