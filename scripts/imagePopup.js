//
//  This file contains code for image viewing popup and scrolling
//


//
// Pop up an image for larger view
//
function PopupImage(img) {
    // Get the image container
    var popup = document.getElementById("image-container");

    // Get the image and caption
    var imageElement = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Display the popup when user clicks on the image
    img.onclick = function(){
        popup.style.display = "block";
        imageElement.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get close button element
    var btnClose = document.getElementsByClassName("close")[0];

    // Close the popup when user clicks close button
    btnClose.onclick = function() {
        popup.style.display = "none";
    }

    // Close the popup when user clicks in the popup background
    popup.onclick = function() {
        popup.style.display = "none";
    }
}
