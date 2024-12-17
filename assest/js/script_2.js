class Slider {
  constructor(sliderLine, rightButton, leftButton, step, maxOffset) {
    this.sliderLine = sliderLine;
    this.rightButton = rightButton;
    this.leftButton = leftButton;
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

function initSliders() {
  const body = document.getElementById('body');
  const isMobile = body.clientWidth < 992;

  const slidersConfig = [
    {
      sliderLine: '.attractions__slider-line',
      rightButton: '.attractions__right',
      leftButton: '.attractions__left',
      step: isMobile ? 342 : 522,
      maxOffset: isMobile ? 3312 : 3312,
    },
    {
      sliderLine: '.attractions_kazan__slider-line',
      rightButton: '.attractions_kazan__right',
      leftButton: '.attractions_kazan__left',
      step: isMobile ? 342 : 522,
      maxOffset: isMobile ? 3312 : 3654,
    },
    {
      sliderLine: '.attractions_piter__slider-line',
      rightButton: '.attractions_piter__right',
      leftButton: '.attractions_piter__left',
      step: isMobile ? 342 : 522,
      maxOffset: isMobile ? 3312 : 3654,
    },
  ];

  slidersConfig.forEach((config) => {
    const sliderLine = document.querySelector(config.sliderLine);
    const rightButton = document.querySelector(config.rightButton);
    const leftButton = document.querySelector(config.leftButton);

    new Slider(sliderLine, rightButton, leftButton, config.step, config.maxOffset);
  });
}

window.addEventListener('DOMContentLoaded', initSliders);