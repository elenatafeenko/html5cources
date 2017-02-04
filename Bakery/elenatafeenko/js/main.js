(function () {
  // book form logic
  var bookButton = document.getElementById('book-button');
  var bookForm = document.getElementById('book-form');
  bookButton.onclick = function () {
    bookForm.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };
  var closeFormButton = document.getElementById('close-form-button');
  var submitFormButton = document.getElementById('submit-form-button');

  closeFormButton.onclick = submitFormButton.onclick = function () {
    bookForm.style.display = 'none';
    document.body.style.overflow = 'auto';
  };
})();


(function() {
  // carousel
  var prevImageButton = document.getElementById('prev-image');
  var nextImageButton = document.getElementById('next-image');
  var sliderMovingPanel = document.getElementById('slider-moving-panel');
  var images = sliderMovingPanel.children;
  var imagesCount = images.length;
  var currentStep = 0;
  var availableSteps = imagesCount - 3; // cause of we see 3 images

  sliderMovingPanel.style.left = '0px';
  prevImageButton.setAttribute('disabled', 'disabled');

  nextImageButton.onclick = function() {
    if (currentStep < availableSteps) {
      var currentOffset = +sliderMovingPanel.style.left.split('px')[0];
      var currentImageWidth = images[currentStep].offsetWidth;
      var nextImageMargin = +getComputedStyle(images[currentStep + 1]).marginLeft.split('px')[0];
      sliderMovingPanel.style.left = (currentOffset - currentImageWidth - nextImageMargin) + 'px';
      currentStep++;
      if (currentStep === availableSteps) {
        nextImageButton.setAttribute('disabled', 'disabled')
      }
      prevImageButton.removeAttribute('disabled');
    }
  };
  prevImageButton.onclick = function() {
    if (currentStep > 0) {
      var currentOffset = +sliderMovingPanel.style.left.split('px')[0];
      var prevImageWidth = images[currentStep - 1].offsetWidth;
      var currentImageMargin = +getComputedStyle(images[currentStep]).marginLeft.split('px')[0];
      sliderMovingPanel.style.left = (currentOffset + prevImageWidth + currentImageMargin) + 'px';
      currentStep--;
      if (currentStep === 0) {
        prevImageButton.setAttribute('disabled', 'disabled')
      }
      nextImageButton.removeAttribute('disabled');
    }
  };
})();