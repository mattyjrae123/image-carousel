const View = (() => {
  const carouselImageContainer = document.querySelector("#carousel-display");
  const carouselButtonContainer = document.querySelector("#carousel-nav");

  const setImage = (imageURL) => {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", imageURL);
    newImage.setAttribute("alt", "Game title screen");

    carouselImageContainer.textContent = "";
    carouselImageContainer.appendChild(newImage);
  };

  const setCarouselButtons = (numButtonsRequired) => {
    carouselButtonContainer.textContent = "";

    for (let i = 0; i < numButtonsRequired; i += 1) {
      const button = document.createElement("button");
      button.setAttribute("data-index", i);
      button.classList.add("nav-circle");

      carouselButtonContainer.appendChild(button);
    }
  };

  const updateCarouselButtons = (currentIndex) => {
    document.querySelectorAll(".nav-circle").forEach((button, i) => {
      if (i === currentIndex) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  };

  const bindCarouselButtonEventHandlers = (handler) => {
    document.querySelectorAll(".nav-circle").forEach((button) => {
      button.addEventListener("click", handler);
    });
  };

  return {
    setImage,
    setCarouselButtons,
    updateCarouselButtons,
    bindCarouselButtonEventHandlers,
  };
})();

export default View;
