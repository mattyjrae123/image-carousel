import View from "./View";
import Carousel from "./Carousel";

const Controller = (() => {
  const init = () => {
    // testing setup code 
    console.log("Controller.init()");
    View.init();
  }

  return {
    init
  }
})();

export default Controller;