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

