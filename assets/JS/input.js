const userForm = document.getElementById('userForm');
const username = document.getElementById('username');
const title = document.getElementById('title');
const rating = document.getElementById('rating');
const content = document.getElementById('content');

var formData = {
    username: 'void',
    title: 'void',
    rating: 'void',
    content: 'void',
};

function submitForm(event) {
    event.preventDefault();
    formData = {
        username: username.value,
        title: title.value,
        rating: rating.value,
        content: content.value,
    };
    // if no empty fields pass this if statement
    if (formData.username == '' || formData.title == '' || formData.rating == '' || formData.content == '') {
        alert("Please fill out all fields to submit form."); // -------------------------------------------------This is where modal will pop up for error if not all fields are filled out
    } else {
        // if the rating is a number pass this if statement
        if (isNaN(formData.rating)) {
            alert("please use a number 1- 5 for the rating");
        } else {
            // assign rating to a variable to allow editing and formatting easier
            var ratingNumber = parseInt(formData.rating);
            // format rating interger before storage

            // if rating is between and including 0-5 store and clear form data
            if (ratingNumber >= 0.0 && ratingNumber <= 5.0) {
                storeLocalStorage(formData);
                clearFormData();
                switchPage();
            } else {
                alert("please only use a number 1- 5 for the rating");
            }
        }
    }
    return;
}

function switchPage() {
    let answer = confirm("Confirm to switch to viewing reviews, hit cancel if you'd like to stay here and submit more.")
    if (answer) {
        location.assign('../../index.html');
    } else {
        username.value = '';
        title.value = '';
        rating.value = '';
        content.value = '';
        return;
    }
}

function clearFormData() {
    formData = {
        username: 'void',
        title: 'void',
        rating: 'void',
        content: 'void',
    };
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

userForm.addEventListener('submit', submitForm);

// code from fourth week challenge

let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};