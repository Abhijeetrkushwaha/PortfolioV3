$(document).ready(function() {

  // owl-carousel for projects
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav: true,
    dots: false,
    items: 1,
  })

  // selector that works like jquery for fast coding
  let selector = (e) => {
    return document.querySelector(e)
  }
  
  // Nav bar toggle event
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

  // Reset nav bar on large size
  window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    
    if(newWidth > 991) {
      selector('.side-nav-content').classList.remove('opened');
      selector('.side-menu-close').classList.remove('closed');
      selector('body').style = 'overflow: visible';
    }

  });

  // Validation code for form
  $('#btn_submit').click((e) => {

    $(".err").hide();
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    let name = $('#name').val().trim(),
    email = $('#email').val().trim(),
    message = $('#message').val().trim();

    if(name == '') {
      $("#name").after('<span class="err">Please enter your name.</span>');
      hasError = true;
    }

    if(email == '') {
      $("#email").after('<span class="err">Please enter your email address.</span>');
      hasError = true;
    }

    if(!emailReg.test(email)) {
      $("#email").after('<span class="err">Enter a valid email address.</span>');
      hasError = true;
    }

    if(message == '') {
      $("#message").after('<span class="err">Please enter your message.</span>');
      hasError = true;
    }

    e.preventDefault()

    if(hasError == true) { 
      return false; 
    } else {
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      $('#btn_submit').after('<p class="success mt-2">Thanks for connecting</p>')
      setTimeout(() => {
        $('.success').hide()
      }, 1000)
    }

  })

});