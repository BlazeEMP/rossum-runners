let loadedReview = {};
const reviewSection = document.body.querySelector(".container");

function renderPage() {
    // append these inside main
    // <div class="card mb-4">
    //     <div class="card-header">
    //         Movie Title
    //     </div>
    //     <div class="card-body">
    //         <h5 class="card-title">Username</h5>
    //         <p class="card-text">Rating: out of 5</p>
    //        <p class="card-text"> User Review</p>
    //     </div>
    // </div>
    let allReviews = readLocalStorage();
    for (review of allReviews) {
        username = review.username;
        title = review.title;
        rating = review.rating;
        content = review.content;
        console.log(review);

        // create outer card
        var card = document.createElement('div');
        card.classList.add('card', 'mb-4');

        // create header for card with movie title
        var cardTitle = document.createElement('div');
        cardTitle.classList.add('card-header');
        cardTitle.textContent = `hey ${review.title}`;
        reviewSection.appendChild(cardTitle);
    }
    console.log(allReviews);
}

function readLocalStorage() {
    let array = [];
    const storedPosts = JSON.parse(localStorage.getItem('reviewData'));
    // console.log(storedPosts);
    if (storedPosts == null) {
        return array;
        // console.log(array);
    }
    else {
        array = storedPosts;
        return array;
    }
}

// object used for loading new data and pushing into review lists, if order of files changes may want to include in input.js
let tempStorageObject = {};

function storeLocalStorage(newObject) {
    tempStorageObject = newObject;
    let fetchedReviews = readLocalStorage();
    fetchedReviews.push(newObject);
    console.log(fetchedReviews);
    localStorage.setItem('reviewData', JSON.stringify(fetchedReviews));
}

renderPage();