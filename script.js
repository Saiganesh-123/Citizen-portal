const slides = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg', 'slider5.jpg', 'slider6.jpg', 'slider7.jpg'];
const slideImage = document.querySelector('#slide-image');
const dots = [...document.querySelectorAll('.slider-dots button')];
let currentSlide = 0;

function showSlide(index) {
  if (!slideImage) return;
  currentSlide = (index + slides.length) % slides.length;
  slideImage.src = `assets/${slides[currentSlide]}`;
  dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === currentSlide));
}

if (slideImage) {
  const nextBtn = document.querySelector('.slide-next');
  const prevBtn = document.querySelector('.slide-previous');
  if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
  setInterval(() => showSlide(currentSlide + 1), 6000);
}

const flashParagraph = document.querySelector('.flash p');
if (flashParagraph) {
  const flashNewsItems = [
    'Online. India Postal payment bank account number is accepted along with Nationalized bank in scholarships application.',
    'For biometric Aadhaar authentication, please visit your nearest citizen service centre with your application ID.',
    'For BC and EBC students, online grievance registration is available through the grievance redressal service.'
  ];
  const flashButtons = [...document.querySelectorAll('.flash button')];
  const flashViewport = document.createElement('div');
  flashViewport.className = 'flash-viewport';
  flashParagraph.parentNode.insertBefore(flashViewport, flashParagraph);
  flashViewport.append(flashParagraph);
  let flashItemIndex = 0;
  let flashIsPaused = false;

  function updateFlashItem(index) {
    flashItemIndex = (index + flashNewsItems.length) % flashNewsItems.length;
    flashParagraph.classList.remove('flash-scroll');
    void flashParagraph.offsetWidth;
    flashParagraph.textContent = flashNewsItems[flashItemIndex];
    flashParagraph.classList.add('flash-scroll');
  }

  if (flashButtons.length >= 3) {
    flashButtons[0].addEventListener('click', () => updateFlashItem(flashItemIndex - 1));
    flashButtons[1].addEventListener('click', () => {
      flashIsPaused = !flashIsPaused;
      flashParagraph.classList.toggle('flash-paused', flashIsPaused);
      flashButtons[1].textContent = flashIsPaused ? '▶' : 'Ⅱ';
    });
    flashButtons[2].addEventListener('click', () => updateFlashItem(flashItemIndex + 1));
  }
  updateFlashItem(0);
}

