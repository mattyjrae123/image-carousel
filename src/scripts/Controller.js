import View from "./View";
import Carousel from "./Carousel";

const Controller = (() => {
  const updateDisplay = () => {
    View.displayImage(Carousel.get());
    View.displayNavigationCircles(Carousel.length(), Carousel.getIndex());
    View.bindNavigationCircleEventListeners(handleNavigationCircleClicked);
  }

  const handleNavigationCircleClicked = (index) => {
    Carousel.set(parseInt(index, 10));
    updateDisplay();
  }

  const init = () => {
    updateDisplay();
  }

  return {
    init
  }
})();

export default Controller;