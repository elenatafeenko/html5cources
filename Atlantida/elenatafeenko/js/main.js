(function initSlider() {
  var slider = document.getElementById('slider');
  var slides = slider.children;
  var leftControl = document.getElementById('left-control');
  var rightControl = document.getElementById('right-control');
  var currentPosition = 0;
  var maxPosition = slides.length - 1;
  slider.style.left = '0%';
  slider.style.transition = 'left 0.5s';
  var animating = false;

  function animateNext() {
    if (currentPosition === maxPosition) {
      slider.style.transition = '';
      slider.style.left = (+slider.style.left.split('%')[0] + 100) + '%';
      currentPosition = maxPosition;
      slider.append(slides[0]);
      slides = slider.children;
    } else {
      currentPosition += 1;
    }

    animating = true;
    setTimeout(function() {
      slider.style.transition = 'left 0.5s';
      slider.style.left = (+slider.style.left.split('%')[0] - 100) + '%';
      setTimeout(function() { animating = false }, 500);
    }, 0);
  }

  function animatePrev() {
    if (currentPosition === 0) {
      slider.style.transition = '';
      slider.style.left = (+slider.style.left.split('%')[0] - 100) + '%';
      currentPosition = 0;
      slider.prepend(slides[maxPosition]);
      slides = slider.children;
    } else {
      currentPosition -=1;
    }

    animating = true;
    setTimeout(function() {
      slider.style.transition = 'left 0.5s';
      slider.style.left = (+slider.style.left.split('%')[0] + 100) + '%';
      setTimeout(function() { animating = false }, 500);
    }, 0);
  }

  leftControl.onclick = function() {
    if (!animating) {
      animatePrev();
    }
  };

  rightControl.onclick = function() {
    if (!animating) {
      animateNext();
    }
  }
})();

(function initScroll() {
  var headerHeight = document.getElementById('header').offsetHeight;
  var navigationButtons = document.getElementsByClassName('navigation-button');

  for (var i = 0; i < navigationButtons.length; i++) {
    navigationButtons[i].onclick = function(e) {
      e.preventDefault();
      var el = e.currentTarget;
      $(navigationButtons).removeClass('active');
      $('[data-target="' + el.dataset.target + '"').addClass('active');
      var target = document.getElementById(el.dataset.target);
      if (target) {
        $('body').stop().animate({ scrollTop: target.offsetTop - headerHeight }, '500', 'swing');
      }
    }
  }


  $(document).scroll(function(e) {
    var sections = $('.section');
    var activeSection = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop - headerHeight <= document.body.scrollTop) {
        activeSection = sections[i];
      }
    }
    $('.navigation-button').removeClass('active');
    $('[data-target="' + activeSection.id + '"').addClass('active');
  })
})();