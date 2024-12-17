class BurgerMenu {
  constructor(burgerId, headerSelector) {
    this.burger = document.getElementById(burgerId);
    this.header = document.querySelector(headerSelector);
    this.isOpen = false;

    this.init();
  }

  init() {
    this.burger.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.header.classList.toggle('open', this.isOpen);
  }
}

const burgerMenu = new BurgerMenu('burger', 'header');