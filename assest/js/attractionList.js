let box = document.getElementById("box")
box.addEventListener('click', function() {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/List`)
        .then(response => response.json())
        .then(displayAttractionsList)
        .catch(error => console.error('Ошибка:', error));

    function displayAttractionsList(attractions) {
        const attractionsList = document.getElementById('Attractions');
        attractionsList.innerHTML = '';

        attractions.forEach(attraction => {
            const attractionDiv = document.createElement('div');
            attractionDiv.classList.add('box');
            attractionDiv.classList += ' ' + attraction.classSort;
            attractionDiv.classList += ' ' + attraction.classPagin;
            attractionDiv.innerHTML = `
                    <button class="attractions-link${attraction.city}__list">
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
})
