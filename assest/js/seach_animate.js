class SearchBarManager {
    constructor(iconSelector, searchSelector, clearSelector) {
      this.icon = document.querySelector(iconSelector);
      this.search = document.querySelector(searchSelector);
      this.clear = document.querySelector(clearSelector);
      this.searchInput = document.getElementById('searchbar');
  
      this.init();
    }
  
    init() {
      this.icon.addEventListener('click', () => this.toggleSearch());
      this.clear.addEventListener('click', () => this.clearSearch());
    }
  
    toggleSearch() {
      this.search.classList.toggle('active');
    }
  
    clearSearch() {
      this.searchInput.value = '';
      if (this.search.classList.contains('active')) {
        this.search.classList.remove('active');
      }
    }
  }
  
  const searchBarManager = new SearchBarManager('.icon', '.search', '.clear');