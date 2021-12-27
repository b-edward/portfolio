//
//  This file will handle dynamic resizing of the nav bar and dark theme toggling
//



// Global for tracking dark/light mode
var mode;

// Event listeners for dynamic sizing
window.addEventListener("resize", ResetNav);
window.addEventListener("load", ResetNav);
window.addEventListener("load", CheckDark);

//
// Toggle the nav bar button menu
//
function ToggleNav() {
  // Get elements from DOM
  var navButton = document.getElementById('navImage');
  var nav = document.getElementById('nav');

  // Set up slide animation
  nav.style.transitionDuration = "700ms";

  // Light mode
  if(mode == "light") {
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
  // Dark mode
  else {
    // Check which image source is present and toggle it
    if(navButton.src.match("https://storage.googleapis.com/edwardboado.dev/images/navButtonDark.png")) {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navXDark.png";
      nav.style.right = "0";    
    }  
    else {    
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButtonDark.png";
      nav.style.right = "-50%";
    }
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
    if(mode == "light") {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navX.png";
    }
    else {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navXDark.png";
    }
    nav.style.right = "0";
  }
  else if(width < 750) {
    if(mode == "light") {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButton.png";
    }
    else {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButtonDark.png";
    }
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

  // Check if the vertical bar is open
  if(width < 750) {
    ToggleNav();
  } 
}

//
//  Check if the user prefers dark mode theme
//
function CheckDark() {
  // Media query for preference
  let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Update global mode variable
  if(dark) {
    mode = "dark";
      // Set theme to dark if preferred
      SetDarkMode();
  }
  else {
    mode = "light";
  }
}


//
// Change UI to dark mode
//
function SetDarkMode() {
  // Swap colour variables
  document.documentElement.style.setProperty("--color-accent-dark", "#38b6ff");
  document.documentElement.style.setProperty("--color-accent-light", "#004aad");
  document.documentElement.style.setProperty("--color-background-dark", "white");
  document.documentElement.style.setProperty("--color-background-light", "#232323");
  document.documentElement.style.setProperty("--color-text-dark", "#ccc");
  document.documentElement.style.setProperty("--color-text-light", "#white");
  document.documentElement.style.setProperty("--color-link-hover", "#232323");
  document.documentElement.style.setProperty("--color-header-background-light", "#004aad");
  document.documentElement.style.setProperty("--color-header-background-dark", "232323");
  document.documentElement.style.setProperty("--color-header-text-light", "white");
  document.documentElement.style.setProperty("--color-header-text-dark", "#ccc");

  // Get elements from DOM
  var navButton = document.getElementById('navImage');
  var logo = document.getElementById('logo');
  var github = document.getElementById('github-contact');
  var githubFoodSaver = document.getElementById('github-foodSaver');
  var githubGreenify = document.getElementById('github-greenify');
  var githubStudyQuiz = document.getElementById('github-studyQuiz');
  var githubAuctions = document.getElementById('github-auctions');
  var githubPortfolio = document.getElementById('github-portfolio');

  // Update elements
  navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/navButtonDark.png";
  logo.src = "https://storage.googleapis.com/edwardboado.dev/images/logoDark.png";
  github.src = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
  githubFoodSaver.src = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
  githubGreenify.src = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
  githubStudyQuiz.src = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
  githubAuctions.src = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
  githubPortfolio.src = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
}





