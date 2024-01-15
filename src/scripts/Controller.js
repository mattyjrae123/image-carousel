import View from "./View";
import Carousel from "./Carousel";

const Controller = (() => {
  const updateView = () => {
    View.displayImage(Carousel.get());
    View.displayNavigationCircles(Carousel.length(), Carousel.getIndex());
    View.bindNavigationCircleEventListeners(handleNavigationCircleClicked);
  }

  const handleNavigationCircleClicked = (e) => {
    const index = e.target.getAttribute("data-index");
    Carousel.set(parseInt(index, 10));
    updateView();
  }

  const init = () => {
    Carousel.set(0);
    updateView();
  }

  return {
    init
  }
})();

export default Controller;