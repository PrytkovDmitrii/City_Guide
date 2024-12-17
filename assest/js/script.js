class Slider {
  constructor(sliderLineSelector, rightButtonSelector, leftButtonSelector, step, maxOffset) {
    this.sliderLine = document.querySelector(sliderLineSelector);
    this.rightButton = document.querySelector(rightButtonSelector);
    this.leftButton = document.querySelector(leftButtonSelector);
    this.step = step;
    this.maxOffset = maxOffset;
    this.offset = 0;

    this.init();
  }

  init() {
    this.rightButton.addEventListener('click', () => this.moveRight());
    this.leftButton.addEventListener('click', () => this.moveLeft());
  }

  moveRight() {
    this.offset += this.step;
    if (this.offset > this.maxOffset) {
      this.offset = 0;
    }
    this.sliderLine.style.left = -this.offset + 'px';
  }

  moveLeft() {
    this.offset -= this.step;
    if (this.offset < 0) {
      this.offset = this.maxOffset;
    }
    this.sliderLine.style.left = -this.offset + 'px';
  }
}

const body = document.getElementById('body');
if (body.clientWidth < 992) {
  const mobileSlider = new Slider('.catalog__slider-line', '.catalog__right', '.catalog__left', 310, 620);
} else {
  const desktopSlider = new Slider('.catalog__slider-line', '.catalog__right', '.catalog__left', 900, 1800);
}