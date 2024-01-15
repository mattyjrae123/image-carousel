import View from "./View";
import Carousel from "./Carousel";

const Controller = (() => {
  const INTERVAL_TIMER = 5000;
  let intervalId;

  const updateView = () => {
    const imageURL = Carousel.getURL();

    View.setImage(imageURL);
    View.updateCarouselButtons(Carousel.getIndex());
  };

  const handleInterval = () => {
    Carousel.next();
    updateView();
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    intervalId = setInterval(handleInterval, INTERVAL_TIMER);
  };

  const handleCarouselButtonClick = (e) => {
    const rawInput = e.target.getAttribute("data-index");
    const index = parseInt(rawInput, 10);

    Carousel.set(index);

    updateView();
    resetInterval();
  };

  const handleKeydownEvent = (e) => {
    if (e.key === "ArrowRight") {
      Carousel.next();
    } else if (e.key === "ArrowLeft") {
      Carousel.previous();
    } else {
      return;
    }

    updateView();
    resetInterval();
  };

  const start = () => {
    Carousel.set(0);
    View.setCarouselButtons(Carousel.length(), Carousel.getIndex());
    View.bindCarouselButtonEventHandlers(handleCarouselButtonClick);
    View.bindKeydownEventHandler(handleKeydownEvent);
    updateView();

    resetInterval();
  };

  return {
    start,
  };
})();

export default Controller;
