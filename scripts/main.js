
// Toggle the nav bar button menu
function toggleNav() {
  // Get html elements
  var navButton = document.getElementById('navImage');
  var nav = document.getElementById('nav');

  // Check which image source is present and toggle it
  if(navButton.src.match("https://storage.googleapis.com/edwardboado.dev/images/navButton.png")) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navX.png";
    nav.className = "nav-vertical";
  }
  else {    
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButton.png";
    nav.className = "nav-horizontal";
  }

}
