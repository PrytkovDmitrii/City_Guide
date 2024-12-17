class PageLoader {
  constructor() {
    this.body = document.body;
  }

  load() {
    this.body.classList.add('loaded_hiding');
    setTimeout(() => {
      this.body.classList.add('loaded');
      this.body.classList.remove('loaded_hiding');
    }, 500);
  }
}

const pageLoader = new PageLoader();

window.onload = () => {
  pageLoader.load();
};