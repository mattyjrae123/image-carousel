const View = (() => {
  const carouselDisplay = document.querySelector("#carousel-display");
  const carouselNavigation = document.querySelector("#carousel-nav");

  const displayImage = (url) => {
    carouselDisplay.textContent = "";
    const newImage = document.createElement("img");
    newImage.setAttribute("src", url);
    newImage.setAttribute("alt", "Game title screen");

    carouselDisplay.appendChild(newImage);
  }

  const displayNavigationCircles = (numImages, currentIndex) => {
    carouselNavigation.textContent = "";
    for (let x = 0; x < numImages; x+=1) {
      const button = document.createElement("button");
      button.setAttribute("data-index", x);
      button.classList.add("nav-circle");

      if (x === currentIndex) {
        button.classList.add("active");
      }
      
      carouselNavigation.appendChild(button);
    }
  }

  const bindNavigationCircleEventListeners = (listener) => {
    document.querySelectorAll(".nav-circle")
      .forEach((button) => {
        button.addEventListener("click", listener);
      });
  }

  return {
    displayImage,
    displayNavigationCircles,
    bindNavigationCircleEventListeners
  }
})();

export default View;
