document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
  
    // Manual scroll with arrows
    window.slideLeft = function () {
      slider.scrollBy({ left: -300, behavior: "smooth" });
    };
  
    window.slideRight = function () {
      slider.scrollBy({ left: 300, behavior: "smooth" });
    };
  
    // Autoplay function
    function autoScrollSlider() {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  
    // Start autoplay after layout loads
    setTimeout(() => {
      setInterval(autoScrollSlider, 3000);
    }, 500);
  });
  