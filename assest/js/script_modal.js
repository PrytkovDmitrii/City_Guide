class ModalManager {
  constructor(modalIds) {
    this.modalIds = modalIds;
    this.init();
  }

  init() {
    this.modalIds.forEach((id) => {
      this.setupModal(id);
    });
  }

  setupModal(id) {
    const openButton = document.getElementById(`open-msc-${id}00`);
    const closeButton = document.getElementById(`close_modal-${id}`);
    const modal = document.getElementById(`modal-msc-${id}`);

    openButton.addEventListener('click', () => this.openModal(modal));
    closeButton.addEventListener('click', () => this.closeModal(modal));

  }

  openModal(modal) {
    modal.classList.add('open');
  }

  closeModal(modal) {
    modal.classList.remove('open');
  }
}

const modalIds = Array.from({ length: 30 }, (_, i) => i + 1); 
const modalManager = new ModalManager(modalIds);