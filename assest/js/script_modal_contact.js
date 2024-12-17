class ModalManager {
  constructor(modalId, openButtonId, closeButtonId, submitButtonId, newsletterButtonId) {
    this.modal = document.getElementById(modalId);
    this.openButton = document.getElementById(openButtonId);
    this.closeButton = document.getElementById(closeButtonId);
    this.submitButton = document.getElementById(submitButtonId);
    this.newsletterButton = document.getElementById(newsletterButtonId);

    this.init();
  }

  init() {
    this.openButton.addEventListener('click', () => this.openModal());

    this.closeButton.addEventListener('click', () => this.closeModal());

    this.submitButton.addEventListener('click', () => this.handleSubmit());

    this.newsletterButton.addEventListener('click', () => this.handleNewsletter());
  }

  openModal() {
    this.modal.classList.add('open');
  }

  closeModal() {
    this.modal.classList.remove('open');
  }

  handleSubmit() {
    alert('Форма отправлена!');
    this.closeModal();
  }

  handleNewsletter() {
    alert('Вы подписались на рассылку!\nТеперь на вашу почту будут приходить различные уведомления! :D');
  }
}

const modalManager = new ModalManager('modal', 'open_modal', 'close_modal', 'button', 'newsletter');