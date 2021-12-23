
// Toggle the nav bar button menu
function toggleNav() {
  var navButton = document.getElementById('navImage');

  // Check which image source is present
  if(navButton.src.match("https://storage.googleapis.com/edwardboado.dev/images/navButton.png")) {
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navX.png";
    document.getElementById('nav').className = "nav-vertical";
  }
  else {    
    navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButton.png";
    document.getElementById('nav').className = "nav-horizontal";
  }

}
