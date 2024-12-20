let loadedReview = {};
const reviewSection = document.body.querySelector(".container");
const bodySection = document.body;

function renderPage() {
    // append this structure for reviews inside main
    // <div class="card mb-4">
    //     <h4 class="card-header">
    //         Movie Title
    //     </h4>
    //     <div class="card-body">
    //         <h5 class="card-title">Username</h5>
    //         <p class="card-text">Rating: out of 5</p>
    //         <p class="card-text"> User Review</p>
    //     </div>
    // </div>
    let allReviews = readLocalStorage();

    if (allReviews.length == 0) {
        redirectPage("defaultindex.html");
    } else {
        for (review of allReviews) {
            username = review.username;
            title = review.title;
            rating = review.rating;
            content = review.content;

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
    }
}

function readLocalStorage() {
    let array = [];
    const storedPosts = JSON.parse(localStorage.getItem('reviewData'));
    if (storedPosts == null) {
        return array;
    } else {
        array = storedPosts;
        return array;
    }
}

let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

renderPage();