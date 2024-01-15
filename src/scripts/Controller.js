import View from "./View";
import Carousel from "./Carousel";

const Controller = (() => {
  const updateView = () => {
    const imageURL = Carousel.getURL();

    View.setImage(imageURL);
    View.updateCarouselButtons(Carousel.getIndex());
  };

  const handleCarouselButtonClick = (e) => {
    const rawInput = e.target.getAttribute("data-index");
    const index = parseInt(rawInput, 10);

    Carousel.set(index);

    updateView();
  };

  const start = () => {
    Carousel.set(0);
    View.setCarouselButtons(Carousel.length(), Carousel.getIndex());
    View.bindCarouselButtonEventHandlers(handleCarouselButtonClick);
    updateView();
  };

  return {
    start,
  };
})();

export default Controller;
