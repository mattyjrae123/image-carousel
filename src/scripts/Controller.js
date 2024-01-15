import View from "./View";
import Model from "./Model";

const Controller = (() => {
  const init = () => {
    // testing setup code 
    console.log("Controller.init()");
    View.init();
    Model.init();
  }

  return {
    init
  }
})();

export default Controller;