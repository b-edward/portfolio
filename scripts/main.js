
// Toggle the nav bar button menu
function toggleNav() {
  var navButton = document.getElementById('navImage');

  // Check which image source is present
  if(navButton.src.match("images/navButton.png")) {
    navButton.src = "images/navX.png";
    document.getElementById('nav').className = "nav-vertical";
  }
  else {    
    navButton.src = "images/navButton.png";
    document.getElementById('nav').className = "nav-horizontal";
  }

}
