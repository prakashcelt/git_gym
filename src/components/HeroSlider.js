import HeroSlider, { Slide } from "hero-slider";


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

const mystyle1 = {
  // border: "5px solid green",
  padding: "0px 100px",
  marginTop:"-5rem"  ,
  marginBottom:"5rem"  ,
  borderRadius:"30px"
}
const mystyle2 = {
  // border: "5px solid blue",
  padding: "0px 20px",
  borderRadius:"30px",
  // width:"100%",
  
}




export default function BasicSlider() {
  return (
    <div className="mediaMatch" >
    <div className="heroslider" style={mystyle1}>
    <HeroSlider
    className="innerheroslider"
    style={mystyle2}
      // width={""}
      height={"475px"}
      borderRadius={"30px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: imageus1,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: imageus2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: imageus3,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: imageus4,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: imageus5,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: imageus6,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: imageus7,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: imageus8,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: imageus9,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: imageus10,
        }}
      />

      {/* <MenuNav /> */}
    </HeroSlider>
    </div>
    </div>
  );
}
