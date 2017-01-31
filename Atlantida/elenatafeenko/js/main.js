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