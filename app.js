const navSlide = () => {
    const hej = document.querySelector('.hej');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    hej.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = 'navLinkFade 0,5s ease forwards ${index / 7 + 0}'
        }
        });
        //Animationen
        hej.classList.toggle('toggle');
    });  
}

navSlide();





// this is the target which is observed
var target = document.querySelector('.gamer');

// configure the intersection observer instance
var intersectionObserverOptions = {
  root: null,
  rootMargin: '150px',
  threshold: 1.0
}
    
var observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);

// provide the observer with a target
observer.observe(target);

function onIntersection(entries){
  entries.forEach(entry => {
    console.clear();
    console.log(entry.intersectionRatio)
    target.classList.toggle('visible', entry.intersectionRatio > 0);
    
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {
      // Stop watching 
      // observer.unobserve(entry.target);
    }
  });
}
