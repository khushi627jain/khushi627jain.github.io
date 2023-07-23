// document.addEventListener('DOMContentLoaded', function() {
//     ScrollReveal().reveal('.tagName, #projects', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
//     ScrollReveal().reveal('#about', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
//   });
//   console.log(ScrollReveal.version);

  document.addEventListener('DOMContentLoaded', function() {
    // Check if ScrollReveal is loaded before using it
    if (typeof ScrollReveal !== 'undefined') {
      ScrollReveal().reveal('.tagName, #projects', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
      ScrollReveal().reveal('#about', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
    } else {
      console.log('ScrollReveal is not loaded.');
    }
  });

  // Check ScrollReveal version
  if (typeof ScrollReveal !== 'undefined') {
    console.log(ScrollReveal);
  }