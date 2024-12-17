class SearchManager {
  constructor(apiUrl, searchbarId, listId) {
    this.apiUrl = apiUrl;
    this.searchbar = document.getElementById(searchbarId);
    this.list = document.getElementById(listId);
    this.data = [];

    this.init();
  }

  init() {
    this.loadData();
    this.searchbar.addEventListener('input', () => this.searchAttraction());
  }

  loadData() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        this.displayList(data);
      })
      .catch((error) => console.error('Ошибка:', error));
  }

  displayList(data) {
    this.list.innerHTML = '';

    data.forEach((el) => {
      const li = document.createElement('li');
      li.className = 'search_attractions';
      li.textContent = el.name;
      li.addEventListener('click', () => {
        window.location.href = `all_attraction.html?id=${el.id}`;
      });

      this.list.appendChild(li);
    });
  }

  searchAttraction() {
    const input = this.searchbar.value.toLowerCase();
    const filteredData = this.data.filter((el) => el.name.toLowerCase().includes(input));
    this.displayList(filteredData);
  }
}

const searchManager = new SearchManager(
  'https://6735da235995834c8a945ad9.mockapi.io/api/Attractions',
  'searchbar',
  'input'
);