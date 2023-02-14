import SimpleImageSlider from "react-simple-image-slider";

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

const images = [
//   { url: "../images/DUS_4802.jpg" },
//   { url: "images/2.jpg" },
//   { url: "images/3.jpg" },
//   { url: "images/4.jpg" },
//   { url: "images/5.jpg" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
imageus1,imageus2,imageus3,imageus4,imageus5,imageus6,imageus7,imageus8,imageus9,imageus10
];

const Slidey = () => {
  return (
    <div className="slidey">
      <SimpleImageSlider
        width={1100}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{borderRadius:"3px", width:"100%"}}
      />
    </div>
  );
}

export default Slidey;