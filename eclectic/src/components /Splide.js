document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: 'loop',          // Enables infinite looping
      perPage: 3,            // Number of slides visible at a time
      autoplay: true,        // Auto-scroll
      interval: 3000,        // Delay between transitions (in milliseconds)
      pauseOnHover: true,    // Pause autoplay when hovering
      gap: '1rem',           // Adds spacing between slides
      breakpoints: {
        1024: {
          perPage: 2,        // Display 2 slides on medium screens
        },
        640: {
          perPage: 1,        // Display 1 slide on smaller screens
        }
      },
    });
  
    splide.mount();
  });
  