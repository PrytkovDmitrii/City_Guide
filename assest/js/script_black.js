class ThemeSwitcher {
  constructor() {
    this.moon = document.getElementById('returnBlack');
    this.body = document.getElementById('body');
    this.footer = document.getElementById('footer');
    this.sun = document.getElementById('sun');
    this.header = document.getElementById('header');
    this.line = document.getElementById('line');
    this.isDarkTheme = false;

    this.init();
  }

  init() {
    this.moon.addEventListener('click', () => this.toggleTheme());
    this.loadThemeFromLocalStorage();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme(this.isDarkTheme);
    this.saveThemeToLocalStorage();
  }

  applyTheme(isDark) {
    const elements = [this.body, this.footer, this.moon, this.header, this.line];
    elements.forEach((element) => {
      isDark ? element.classList.add('black') : element.classList.remove('black');
    });

    this.moon.id = isDark ? 'removeBlack' : 'returnBlack';
    this.sun.src = isDark
      ? './assest/image/result_islam8438-no-bg-preview (carve.photos).png'
      : './assest/image/result_3dac58864881d859b7da50510e9daa13-no-bg-preview%20(carve.photos).png';
  }

  saveThemeToLocalStorage() {
    localStorage.setItem('theme', this.isDarkTheme ? 'black' : '');
  }

  loadThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme == 'black';
    this.applyTheme(this.isDarkTheme);
  }
}

const themeSwitcher = new ThemeSwitcher();