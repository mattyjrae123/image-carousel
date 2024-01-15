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
    const buttons = document.querySelectorAll(".nav-circle");
    for (let x = 0; x < buttons.length; x+=1) {
      buttons[x].addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        listener(index);
      });
    }
  }

  return {
    displayImage,
    displayNavigationCircles,
    bindNavigationCircleEventListeners
  }
})();

export default View;
