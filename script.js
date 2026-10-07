/* =========================================
   STUDYHUB JAVASCRIPT
========================================= */


/* ---------- SEARCH ---------- */

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {

        alert("Please enter a subject, topic, or note to search.");

    } else {

        alert("Searching for: " + searchText);

    }

});


/* Allow ENTER key to search */

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


/* ---------- START LEARNING ---------- */

const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function() {

    document.querySelector(".subjects").scrollIntoView({
        behavior: "smooth"
    });

});


/* ---------- BROWSE NOTES ---------- */

const browseButton = document.querySelector(".browse-button");

browseButton.addEventListener("click", function() {

    document.querySelector(".subjects").scrollIntoView({
        behavior: "smooth"
    });

});


/* ---------- VIEW ALL COURSES ---------- */

const viewButton = document.querySelector(".view-button");

viewButton.addEventListener("click", function() {

    alert("More courses will be available soon!");

});


/* ---------- COURSE ARROWS ---------- */

const courseButtons = document.querySelectorAll(".arrow-button");

courseButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".subject-card");

        const courseName = card.querySelector("h3").textContent;

        alert(
            "You selected: " + courseName +
            "\n\nThe notes page will be connected here."
        );

    });

});


/* ---------- UPLOAD NOTES ---------- */

const uploadButton = document.querySelector(".cta-upload");

uploadButton.addEventListener("click", function() {

    alert(
        "The Upload Notes page will be connected here."
    );

});


/* ---------- CTA BROWSE ---------- */

const ctaBrowse = document.querySelector(".cta-browse");

ctaBrowse.addEventListener("click", function() {

    document.querySelector(".subjects").scrollIntoView({
        behavior: "smooth"
    });

});


/* ---------- LOGIN ---------- */

const loginButton = document.querySelector(".login");

loginButton.addEventListener("click", function() {

    alert(
        "The Login page will be added later."
    );

});


/* ---------- REGISTER ---------- */

const registerButton = document.querySelector(".register");

registerButton.addEventListener("click", function() {

    alert(
        "The Registration page will be added later."
    );

});


/* ---------- PAGE LOADED ---------- */

console.log("StudyHub website loaded successfully!");
