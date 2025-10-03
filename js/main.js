(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

    if($(window).scrollTop() > 300)
    {
      $('.scrolling-navbar').css('top',0);
    }

  // Sticky Nav
    $(window).on('scroll', function() {
      if ($(window).width() >= 992) {
        if ($(window).scrollTop() > 150) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
            $('.scrolling-navbar').css('top', 150);
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
            $('.scrolling-navbar').css('top', 150-$(window).scrollTop());
        }
      }
      else if($(window).width() >= 768) {
        if ($(window).scrollTop() > 180) {
          $('.scrolling-navbar').addClass('top-nav-collapse');
          $('.scrolling-navbar').css('top', 180);
        } else {
          $('.scrolling-navbar').removeClass('top-nav-collapse');
          $('.scrolling-navbar').css('top', 180-$(window).scrollTop());
        }
      }
      else if($(window).width() >= 480) {
        if ($(window).scrollTop() > 200) {
          $('.scrolling-navbar').addClass('top-nav-collapse');
          $('.scrolling-navbar').css('top', 200);
        } else {
          $('.scrolling-navbar').removeClass('top-nav-collapse');
          $('.scrolling-navbar').css('top', 200-$(window).scrollTop());
        }
      }
      else if($(window).width() <= 480) {
        if ($(window).scrollTop() > 250) {
          $('.scrolling-navbar').addClass('top-nav-collapse');
          $('.scrolling-navbar').css('top', 250);
        } else {
          $('.scrolling-navbar').removeClass('top-nav-collapse');
          $('.scrolling-navbar').css('top', 250-$(window).scrollTop());
        }
      }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2026/12/09',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> <b>:</b> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> <b>:</b> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    // $('.navbar-nav').onePageNav({
    //         currentClass: 'active'
    // }); 

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1500
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

if (window.location.pathname.startsWith('/papper')) {
  // Get the topics ul element
  const topicsUl = document.querySelector('.topics ul');

  // Add event listener to the li elements
  topicsUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' || e.target.parentNode.tagName === 'LI') {
      const li = e.target.tagName === 'LI' ? e.target : e.target.parentNode;
      li.classList.toggle('active');
      li.querySelector('.title').classList.toggle('active');
    }
  });
}

// Check if the current page is /program
if (window.location.pathname.startsWith('/program')) {
  function speaker(targetId) {
    
    const selectedContent = document.getElementById(targetId);
    if (selectedContent !== null) {
      // Hide all content
      const content = document.querySelector('.speaker-wrapper');
      content.querySelectorAll('.speaker').forEach((c) => {
        c.style.display = 'none';
      });

      // Show the selected content
      selectedContent.style.display = 'flex';
    }
  }
  
  speaker(window.location.hash.replace('#', ''));
  // Get the ul element
  const programUl = document.querySelector('.program ul');

  // Get the li elements
  const programLi = programUl.querySelectorAll('li');

  // Add event listener to the li elements
  programLi.forEach((li) => {
    li.addEventListener('click', (e) => {
      // Get the current target
      const currentTarget = e.currentTarget.querySelector('a');

      // Remove the active class from all li elements
      programUl.querySelectorAll('a').forEach((a) => {
        a.classList.remove('active');
      });
      programUl.querySelectorAll('li').forEach((li) => {
        li.classList.remove('active');
      });

      // Add the active class to the current target
      currentTarget.classList.add('active');
      e.currentTarget.classList.add('active');

      const targetId = currentTarget.getAttribute('href').replace('#', '');
      // Get the id of the current target
      speaker(targetId);
    });
  });
}

}(jQuery));