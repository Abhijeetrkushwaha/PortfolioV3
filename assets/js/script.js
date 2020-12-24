let selector = (e) => {
  return document.querySelector(e)
}

selector('.side-menu-close').addEventListener('click', () => {

  if(selector('.side-menu-close').classList.contains('closed')){
    selector('.side-nav-content').classList.remove('opened');
    selector('.side-menu-close').classList.remove('closed');
  } else {
    selector('.side-nav-content').classList.add('opened');
    selector('.side-menu-close').classList.add('closed');
  }
})

$('.owl-carousel').owlCarousel({
  loop:true,
  nav: true,
  dots: false,
  items: 1,
})