const attractionsList = document.getElementById('attractions-list');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImage = document.querySelector('.fullscreen__image');
const closeBtn = document.querySelector('.fullscreen__close');
const prevBtn = document.querySelector('.fullscreen__prev');
const nextBtn = document.querySelector('.fullscreen__next');

let currentImageIndex = 0;
let images = [];

function getAttractionIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

setTimeout(() => {
  fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/Attractions`)
    .then(response => response.json())
    .then(attractions => {
      const attractionId = getAttractionIdFromUrl();
      displayAttractionById(attractions, attractionId);
    })
    .catch(error => console.error('Ошибка:', error));
}, 100);

function displayAttractionById(attractions, id) {
  const attraction = attractions.find(attraction => attraction.id == id);
  if (attraction) {
    attractionsList.innerHTML = '';
    document.getElementById("attractions__sort").classList.add("dnone");
    document.getElementById("Attractions").classList.add("dnone");
    document.getElementById("attractions__pagin").classList.add("dnone");
    document.getElementById("header__prev").classList.add("dnone");
    document.body.classList.add('loaded_hiding');
    const attractionDiv = document.createElement('div');
    attractionDiv.classList.add('attraction');
    attractionDiv.innerHTML = `
      <div class="header__prev">
        <a href="all_attraction.html" class="header__prev-btn" >⬅ Вернуться назад</a>
      </div>
      <div class="header__attract-title">
        <h1 class="header__attract-title-text">${attraction.name}</h1>
      </div>
      <div class="attractions__wrapper">
        <div class="attractions__description">
          <div class="attractions__description-title">
            <h3 class="attractions__description-title-text animate-right">${attraction.title}</h3>
          </div>
          <div class="attractions__description-text" >
            <p class="animate-left">${attraction.description}</p>
          </div>
        </div>
        <div class="attractions__images animate-right">
          <img class="attractions__images-img" src="${attraction.image}" alt="${attraction.name}" width="650" height="450">
        </div>
      </div>
      <div class="attractions__wrapper">
        <div class="attractions__imagesTwo animate-left">
          <img class="attractions__imagesTwo-img" src="${attraction.imageTwo}" alt="${attraction.name}" width="auto" height="500">
        </div>
        <div class="attractions__description">
          <div class="attractions__description-title">
            <h3 class="attractions__description-title-text animate-left">${attraction.titleTwo}</h3>
          </div>
          <div class="attractions__description-text">
            <p class="animate-right">${attraction.descriptionTwo}</p>
          </div>
        </div>
      </div>
      <div class="attractions__attract-title">
        <h1 class="attractions__attract-title-text animate-down">${attraction.name} на карте</h1>
      </div>
      <div class="attractions__map animate-up">
        <iframe class="attractions__map-link" src=${attraction.map} width="750" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="attractions__info-title">
        <h1 class="attractions__info-title-text animate-down">Дополнительная информация</h1>
      </div>
      <div class="attractions__info">
        <p class="animate-left">Адрес: ${attraction.address}</p>
        <p class="animate-right">Время работы: ${attraction.openHours}</p>
      </div>
    `;
    attractionsList.appendChild(attractionDiv);

    images = [attraction.image, attraction.imageTwo];

    const imageElements = attractionDiv.querySelectorAll('img');
    imageElements.forEach((img, index) => {
      img.addEventListener('click', () => openFull(index));
    });

    document.body.classList.add('loaded_hiding');
    setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  } else {
    console.error('Достопримечательность с указанным ID не найдена');
  }
}


function openFull(index) {
  currentImageIndex = index;
  fullscreenImage.src = images[currentImageIndex];
  fullscreenOverlay.classList.add('active');
}

function prev() {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
  fullscreenImage.src = images[currentImageIndex];
}

function next() {
  currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
  fullscreenImage.src = images[currentImageIndex];
}


closeBtn.addEventListener('click', () => {
  fullscreenOverlay.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    fullscreenOverlay.classList.remove('active');
  }
});

prevBtn.addEventListener('click', () => {
  prev()
});

nextBtn.addEventListener('click', () => {
  next()
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    prev()
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    next()
  }
});
