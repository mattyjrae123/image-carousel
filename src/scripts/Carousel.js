import image1 from "../images/age_of_empires_3.jpg";
import image2 from "../images/assassins_creed.jpg";
import image3 from "../images/battlefield_1.jpg";
import image4 from "../images/battlefield_2.jpg";
import image5 from "../images/battlefield_bad_company_2.jpg";
import image6 from "../images/counter_strike_source.jpg";
import image7 from "../images/dave_the_diver.jpg";
import image8 from "../images/day_of_defeat_source.jpg";
import image9 from "../images/far_cry.jpg";
import image10 from "../images/flyff.jpg";
import image11 from "../images/half_life_2.jpg";
import image12 from "../images/portal.jpg";
import image13 from "../images/runescape.jpg";
import image14 from "../images/terraria.jpg";
import image15 from "../images/trackmania_nations_forever.jpg";

const Carousel = (() => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  let currentIndex = 0;

  const length = () => images.length;

  const get = () => images[currentIndex];

  const getIndex = () => currentIndex;

  const set = (newIndex) => {
    if (newIndex < 0 || newIndex >= images.length) {
     return;
    }
    
    currentIndex = newIndex;
  };

  const next = () => {
    if (currentIndex >= images.length -1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
  };

  const previous = () => {
    if (currentIndex <= 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex -= 1;
    }
  };

  return {
    length,
    get,
    getIndex,
    set,
    next,
    previous
  };
})();

export default Carousel;
