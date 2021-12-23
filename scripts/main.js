window.addEventListener("resize", ResetNav);


// Toggle the nav bar button menu
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

function ResetNav() {    
  // Get elements from DOM
  var navButton = document.getElementById('navImage');
  var nav = document.getElementById('nav');
  var width = document.documentElement.clientWidth;
  
  // disable slide animation
  nav.style.transitionDuration = "0ms";

  if(width > 750) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navX.png";
    nav.style.right = "0";
  }
  else if(width < 750) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButton.png";
    nav.style.right = "-50%";
  }
}
