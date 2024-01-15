import View from "./View";
import Carousel from "./Carousel";

const Controller = (() => {
  const updateDisplay = () => {
    View.displayImage(Carousel.get());
  }

  const init = () => {
    View.init();
    updateDisplay();
  }

  return {
    init
  }
})();

export default Controller;