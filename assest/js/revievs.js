let reviewsList = document.getElementById('revievs')
let star1 = document.getElementById('star1')
let star2 = document.getElementById('star2')
let star3 = document.getElementById('star3')
let star4 = document.getElementById('star4')
let star5 = document.getElementById('star5')
const newStar = './assest/image/start.svg'
const oldStar = "http://127.0.0.1:5501/assest/image/startNoYelloy.svg"
let starReview = 0
let star

star1.addEventListener('click', function(){
    starReview = 1
    console.log(star1.src)
    if (star1.src == oldStar) {
        star1.src = newStar  
    } else {
        star2.src = oldStar
        star3.src = oldStar
        star4.src = oldStar
        star5.src = oldStar
    } 
}) 

star2.addEventListener('click', function(){
    starReview = 2
    if (star2.src == oldStar) {
        star1.src = newStar
        star2.src = newStar  
    } else {
        star3.src = oldStar
        star4.src = oldStar
        star5.src = oldStar
    } 
})

star3.addEventListener('click', function(){
    starReview = 3
    if (star3.src == oldStar) {
        star1.src = newStar
        star2.src = newStar  
        star3.src = newStar
    } else {
        star4.src = oldStar
        star5.src = oldStar
    } 
})

star4.addEventListener('click', function(){
    starReview = 4
    if (star4.src == oldStar) {
        star1.src = newStar
        star2.src = newStar  
        star3.src = newStar
        star4.src = newStar
    } else {
        star5.src = oldStar
    } 
})

star5.addEventListener('click', function(){
    starReview = 5
        star1.src = newStar
        star2.src = newStar  
        star3.src = newStar
        star4.src = newStar
        star5.src = newStar 
})

document.getElementById('revievsForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById("inputName").value
    const email = document.getElementById("inputEmail").value
    const review = document.getElementById("inputText").value
    const checkbox = document.getElementById("inputCheckbox").checked

    if (!name || !email || !review || starReview == 0 || !checkbox) {
        alert('Заполните все обязательные поля!');
        return;
    }

    const reviewData = {
        name: name,
        email: email,
        review: review,
        star: starReview,
    };

    
    fetch('https://6756c695c0a427baf94a5624.mockapi.io/revievse', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(reviewData) 
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Ошибка при отправке данных на сервер');
        }
    })
    .then(data => {
        alert('Отзыв успешно отправлен!');

        document.getElementById('revievsForm').reset();
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

let count = 0;
let i = 0

fetch(`https://6756c695c0a427baf94a5624.mockapi.io/revievse`)
    .then(response => response.json())
    .then(displayReviews)
    .catch(error => console.error('Ошибка:', error));

function displayReviews(reviews) {
    if (reviews.length == 0) {
        const noReviewsDiv = document.createElement('div');
        noReviewsDiv.classList.add('revievs__none');
        noReviewsDiv.innerHTML = `
            <h2 class="revievs__none-text">Тут пока что ничего нет...</h2>
            <img class="revievs__none-img" src="./assest/image/icons8-лупа.svg" alt="none">
        `;
        reviewsList.appendChild(noReviewsDiv);
    } else {
        reviews.forEach(review => {
            let star = '';
            count = count + review.star;
            i++;

            if (review.star == 1) {
                star = `
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                `;
            } else if (review.star == 2) {
                star = `
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                `;
            } else if (review.star == 3) {
                star = `
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                `;
            } else if (review.star == 4) {
                star = `
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${oldStar}" alt="">
                `;
            } else if (review.star == 5) {
                star = `
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                <img class="reviews__star-size" src="${newStar}" alt="">
                `;
            }

            const reviewsDiv = document.createElement('div');
            reviewsDiv.classList.add('reviews');
            reviewsDiv.classList.add('animate-right');
            reviewsDiv.id = `review-${review.id}`;
            reviewsDiv.innerHTML = `
            <div class="reviews__wrap">
                <div class="reviews__left">
                    <div class="reviews__wrap-name">
                        <p class="reviews__name">${review.name}</p>
                        <div class="reviews__star">
                            ${star}
                        </div>
                    </div>
                    <p class="reviews__text">${review.review}</p>
                </div>
                <div class="reviews__right">
                    <img class="reviews__trash" src="./assest/image/trash.svg" alt="ведерко" id="trash-${review.id}">
                </div>
            </div>
            `;
            reviewsList.appendChild(reviewsDiv);

            document.getElementById(`trash-${review.id}`).addEventListener("click", function () {
                deleteReview(review.id);
            });
        });
        let num = count / i;
        const rateDiv = document.createElement('div');
        rateDiv.classList.add('revievs__rating');
        rateDiv.classList.add('animate-up');
        rateDiv.innerHTML = `
            <h2 class="revievs__rating-text">Общая оценка</h2>
            <div class="revievs__rating-wrap">
                <h1 class="revievs__rating-number">${num.toFixed(2)}</h1>
                <div class="revievs__rating-star">
                    <img class="reviews__rating-star" src="${newStar}" alt="zvezdochka">
                </div>
            </div>
            <p class="revievs__rating-count">Количество отзывов: ${i}</p>
        `;
        reviewsList.appendChild(rateDiv);
    }
}

function deleteReview(reviewId) {
    fetch(`https://6756c695c0a427baf94a5624.mockapi.io/revievse/${reviewId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            const reviewElement = document.getElementById(`review-${reviewId}`);
            if (reviewElement) {
                reviewElement.remove();
            }
        } else {
            console.error('Ошибка при удалении отзыва');
        }
    })
    .catch(error => console.error('Ошибка:', error));
}