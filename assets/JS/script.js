let loadedReview = {};
const main = document.body.main;

function renderPage() {
    let allReviews = readLocalStorage();
    for (review of allReviews) {
        username = review.username;
        title = review.title;
        rating = review.rating;
        content = review.content;
        console.log(review);
        
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