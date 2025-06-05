const element = document.querySelectorAll(".scroll1,.scroll2");


// Define the options for the Intersection Observer
const options = {

  root: null,
  rootMargin: '0px',
  threshold: .5
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'show' class to trigger the animation
   entry.target.classList.toggle("show", entry.isIntersecting)
  });
  }, options);

// Start observing the element

element.forEach(element =>{
observer.observe(element);
});