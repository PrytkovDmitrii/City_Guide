let currentPage = 1;
const itemsPerPage = 10;

function fetchAttractions(page) {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/List?page=${page}&limit=${itemsPerPage}`)
        .then(response => response.json())
        .then(data => {
            displayAttractionsList(data);
            loader.style.display = 'none';
        })
        .catch(error => {
            console.error('Ошибка:', error);
            loader.style.display = 'none';
        });
}

function displayAttractionsList(attractions) {
    const attractionsList = document.getElementById('Attractions');
    attractionsList.innerHTML = '';

    attractions.forEach(attraction => {
        const attractionDiv = document.createElement('div');
        attractionDiv.classList.add('box');
        attractionDiv.classList += ' ' + attraction.classSort;
        attractionDiv.classList += ' ' + attraction.classPagin;
        attractionDiv.innerHTML = `
            <button class="attractions-link${attraction.city}__list" id = "${attraction.listId}">
                <div class="attractions${attraction.city}__list box ${attraction.classSort} ${attraction.classPagin}">
                    <div class="attractions${attraction.city}__image">
                        <img class="attractions__image" src="${attraction.image}">
                    </div>
                    <p class="attractions${attraction.city}__text">
                        ${attraction.name} 
                    </p>
                    <div class="attractions${attraction.city}__wrap">
                        <div class="attractions${attraction.city}__img">
                            <img src="./assest/image/map-pin-line.svg" alt="local">
                        </div>
                        <div class="attractions${attraction.city}__local">
                            <p class="attractions${attraction.city}__local-t">
                                ${attraction.local}
                            </p>
                        </div>
                    </div>
                </div>
            </button>
        `;
        attractionDiv.addEventListener('click', () => {
            window.location.href = `all_attraction.html?id=${attraction.id}`;
        });
          
        attractionsList.appendChild(attractionDiv);
    });
}

document.querySelector('.attractions__pagination').addEventListener('click', event => {
    if (event.target.classList.contains('attractions__pagin-btn')) {
        const page = event.target.dataset.f;
        currentPage = parseInt(page);
        fetchAttractions(currentPage);
    }
});

fetchAttractions(currentPage);


// git branch -b test
// git status
// git add .
// git commit -m "2oiewpweovmv"
// git push origin main
// git fetch 
// git cherry-pick
// git checkout 

