// Event listeners for dynamic sizing
window.addEventListener("resize", ResetNav);
window.addEventListener("load", ResetNav);


//
// Toggle the nav bar button menu
//
function ToggleNav() {
  // Get elements from DOM
  var navButton = document.getElementById('navImage');
  var nav = document.getElementById('nav');

  // Set up slide animation
  nav.style.transitionDuration = "700ms";

  // Check which image source is present and toggle it
  if(navButton.src.match("https://storage.googleapis.com/edwardboado.dev/images/navButton.png")) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navX.png";
    nav.style.right = "0";    
  }
  else {    
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButton.png";
    nav.style.right = "-50%";
  }
}

//
// Reset the nav bar after resizing
//
function ResetNav() {    
  // Get elements from DOM
  var navButton = document.getElementById('navImage');
  var nav = document.getElementById('nav');
  var width = document.documentElement.clientWidth;
  
  // disable slide animation
  nav.style.transitionDuration = "0ms";

  // Set up for large and small screens
  if(width > 750) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navX.png";
    nav.style.right = "0";
  }
  else if(width < 750) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButton.png";
    nav.style.right = "-50%";
  }
}

//
// Close vertical nav bar
//
function CloseNav() {
  // Get elements from DOM
  var navButton = document.getElementById('navImage');
  var width = document.documentElement.clientWidth;

  console.log("in the close function");

  // Check if the vertical bar is open
  if(width < 750) {
    console.log("calling toggle");
    ToggleNav();
  } 
}

