//
// Pop up an image for larger view
//

function PopupImage(img) {
    // Get the modal
    var modal = document.getElementById("image-container");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    //var img = document.getElementById("preview-foodSaver");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    // Get the <span> element that closes the modal
    var btnClose = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    btnClose.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function() {
        modal.style.display = "none";
    }
}
