import React from "react";
import "./offerOfficial.css";
// import check_sign from "../images/chech_sign (1).svg"
import check_sign from "../images/check_sign (3).svg";
import closesq from "../images/x-square.svg";
import { Link } from "react-scroll";

export default function Offerofficial() {
  return (
    <div id="1" className="offerOfficial">
      <section className="price-comparison">
        <div className="price-column">
          <div className="price-header">
            <div className="price">
              <div className="dollar-sign"></div>
              1800
              <div className="per-month">/3MO</div>
            </div>
            <div className="plan-name">Basic</div>
          </div>
          <div className="divider"></div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature A
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature B
          </div>
          <div className="feature inactive">
            <img src={closesq} alt="" />
            Feature C
          </div>
          <div className="feature inactive">
            <img src={closesq} alt="" />
            Feature D
          </div>
          <div className="feature inactive">
            <img src={closesq} alt="" />
            Feature E
          </div>
          <div className="feature inactive">
            <img src={closesq} alt="" />
            Feature F
          </div>
          {/* <button className="cta">Start Today</button> */}
          <Link  to="contact" className="cta">
            Start Today
          </Link>

        </div>
        <div className="price-column popular">
          <div className="most-popular">Most Popular</div>
          <div className="price-header">
            <div className="price">
              <div className="dollar-sign"></div>
              6000
              <div className="per-month">/12MO</div>
            </div>
            <div className="plan-name">Professional</div>
          </div>
          <div className="divider"></div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature A
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature B
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature C
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature D
          </div>
          <div className="feature inactive">
            <img src={closesq} alt="" />
            Feature E
          </div>
          <div className="feature inactive">
            <img src={closesq} alt="" />
            Feature F
          </div>
          {/* <button className="cta">Start Today</button>
          <Link  to='contact' className='cta'>Start Today</Link> */}
          {/* <button className="cta">Start Today</button> */}
          <Link  to="contact" className="cta">
            Start Today
          </Link>
        </div>
        <div className="price-column">
          <div className="price-header">
            <div className="price">
              <div className="dollar-sign"></div>
              3000
              <div className="per-month">/6mo</div>
            </div>
            <div className="plan-name">Premium</div>
          </div>
          <div className="divider"></div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature A
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature B
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature C
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature D
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature E
          </div>
          <div className="feature">
            <img src={check_sign} alt="" />
            Feature F
          </div>
          {/* <button className="cta">Start Today</button> */}
          <Link  to="contact" className="cta">
            Start Today
          </Link>
        </div>
      </section>
    </div>
  );
}
