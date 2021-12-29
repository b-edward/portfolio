//
//  This file contains code for image viewing popup and scrolling
//

// Global to store image links
var imageLinks = [];
var imageCaptions = [];
var currentIndex = 0;

// Get the image container
var popup = document.getElementById("image-container");

// Get button elements
var btnClose = document.getElementsByClassName("close")[0];
var btnPrev = document.getElementsByClassName("prevImage")[0];
var btnNext = document.getElementsByClassName("nextImage")[0];

// Close the popup when user clicks close button
btnClose.onclick = function() {
    popup.style.display = "none";
}

// Call function to change image when user clicks prev button
btnPrev.onclick = function() {
    DisplayPreviousImage();
}

// Call function to change image when user clicks next button
btnNext.onclick = function() {
    DisplayNextImage();
}

// Change close button on mouseenter for user feedback
btnClose.addEventListener("mouseenter", function (event) {
    let imgClose = document.getElementById("imgClose");
    imgClose.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/closeHover.png";
    console.log("mouse entered");
})
// Change close button on mouseexit for user feedback
btnClose.addEventListener("mouseleave", function (event) {
    let imgClose = document.getElementById("imgClose");
    imgClose.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/close.png";
    console.log("mouse entered");
})


// Change previous button on mouseenter for user feedback
btnPrev.addEventListener("mouseenter", function (event) {
    let imgPrevious = document.getElementById("imgPrevious");
    imgPrevious.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/prevHover.png";
    console.log("mouse entered");
})
// Change previous button on mouseexit for user feedback
btnPrev.addEventListener("mouseleave", function (event) {
    let imgPrevious = document.getElementById("imgPrevious");
    imgPrevious.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/prev.png";
    console.log("mouse entered");
})


// Change next button on mouseenter for user feedback
btnNext.addEventListener("mouseenter", function (event) {
    let imgNext = document.getElementById("imgNext");
    imgNext.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/nextHover.png";
    console.log("mouse entered");
})
// Change next button on mouseexit for user feedback
btnNext.addEventListener("mouseleave", function (event) {
    let imgNext = document.getElementById("imgNext");
    imgNext.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/next.png";
    console.log("mouse entered");
})


//
// Respond to thumb image onclick event by enlarging image for viewing
//
function PopupImage(img) {
    // Get the image and caption html elements
    var imageDisplay = document.getElementById("image-display");
    var captionText = document.getElementById("caption");

    // Display the popup when user clicks on the image
    img.onclick = function(){
        popup.style.display = "block";
        imageDisplay.src = this.src;
        captionText.innerHTML = this.alt;
        
        // Reset the index tracker and arrays
        currentIndex = 0;
        imageLinks = [];
        imageCaptions = [];

        // Call function to get new images and captions        
        GetProjectImages(img);
    }
}


//
//  When popup is displayed, get the other images for this project
//
function GetProjectImages(img) {
    for (var i = 0; i < db.length; i++) {
        if(db[i].name == img.id) {
            for (var j = 1; j < db[i].urls.length; j++) {      // Start at 1 because 0 is reserved for github repo
                imageLinks.push(db[i].urls[j].url);        
                imageCaptions.push(db[i].imageDescriptions[j].description);
            }
        }
    }
}


//
//  When previous button pressed, decrement currentIndex and call function
//
function DisplayPreviousImage() {
    // Check if we're at the start of the array
    if (currentIndex <= 0) {
        // Start back at last element
        currentIndex = imageLinks.length - 1;
    } else {    
        // Decrement    
        currentIndex--;
    }
    // Call function to display the image
    DisplayNewImage();
}


//
//  When next button pressed, increment currentIndex and call function
//
function DisplayNextImage() {    
    // Check if we're at the end of the array
    if (currentIndex >= imageLinks.length - 1) {
        // Start back at zeroth element
        currentIndex = 0;
    } else {    
        // Increment    
        currentIndex++;
    }
    // Call function to display the image
    DisplayNewImage();
}


//
//  Display the image link at the current index
//
function DisplayNewImage() {
    // Get the image and caption html elements
    var imageDisplay = document.getElementById("image-display");
    var captionText = document.getElementById("caption");

    // Update the html elements from the arrays
    imageDisplay.src = imageLinks[currentIndex];
    captionText.innerHTML = imageCaptions[currentIndex];
}