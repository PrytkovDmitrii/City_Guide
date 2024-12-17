document.getElementById('attractions__sort').addEventListener('click', event => {
    let filterClass = event.target.dataset['f'];
    const filterBox = document.querySelectorAll('.box');
    
    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
});
