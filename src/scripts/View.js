const View = (() => {
  const carouselDisplay = document.querySelector("#carousel-display");

  const init = () => {
    console.log("View.init()");
  }

  const displayImage = (url) => {
    carouselDisplay.textContent = "";
    const newImage = document.createElement("img");
    newImage.setAttribute("src", url);
    newImage.setAttribute("alt", "Game title screen");

    carouselDisplay.appendChild(newImage);
  }

  return {
    init,
    displayImage
  }
})();

export default View;
