$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    dots: false,
    items: 1,
  })

  let selector = (e) => {
    return document.querySelector(e)
  }
  
  selector('.side-menu-close').addEventListener('click', () => {
  
    if(selector('.side-menu-close').classList.contains('closed')){
      selector('.side-nav-content').classList.remove('opened');
      selector('.side-menu-close').classList.remove('closed');
      selector('body').style = 'overflow: visible';
    } else {
      selector('.side-nav-content').classList.add('opened');
      selector('.side-menu-close').classList.add('closed');
      selector('body').style = 'overflow: hidden';
    }
  })
  
  $('.nav-link').on('click', () => {
    selector('.side-nav-content').classList.remove('opened');
    selector('.side-menu-close').classList.remove('closed');
    selector('body').style = 'overflow: visible';
  })

  // highlight class will added depending on the sections.
  $("#Menu").onePageNav({
    currentClass: "current-page",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    
    if(newWidth > 991) {
      selector('.side-nav-content').classList.remove('opened');
      selector('.side-menu-close').classList.remove('closed');
      selector('body').style = 'overflow: visible';
    }

  });

});