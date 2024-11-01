let loadedReview = {};
const reviewSection = document.body.querySelector(".container");
const bodySection = document.body;

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

        // 1.) create outer card
        var reviewCard = document.createElement('div');
        reviewCard.classList.add('card', 'mb-4');

        // 2.) create header for card with movie title
        var cardTitle = document.createElement('h4');
        cardTitle.classList.add('card-header');
        cardTitle.textContent = `Movie: ${review.title}`;

        // 2.) create body of review and append its children (username, rating, content)
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // 3.) create username h5 to go in card body
        var usernameSpot = document.createElement('h5');
        usernameSpot.classList.add('card-title');
        usernameSpot.textContent = `User: ${review.username}`;

        // 3.) create section to display review rating
        var ratingSpot = document.createElement('p');
        ratingSpot.classList.add('card-text');
        ratingSpot.textContent = `${review.rating}/5`;

        // 3.) create section containing all text from review
        var contentSpot = document.createElement('p');
        contentSpot.classList.add('card-text');
        contentSpot.textContent = `${review.content}`;

        // build divs from inside out and then move to append whole card
        cardBody.appendChild(usernameSpot);
        cardBody.appendChild(ratingSpot);
        cardBody.appendChild(contentSpot);

        reviewCard.appendChild(cardTitle);
        reviewCard.appendChild(cardBody);

        // append built review div to body main review area
        reviewSection.appendChild(reviewCard);
    }
    bodySection.style.paddingBottom = '30px';


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