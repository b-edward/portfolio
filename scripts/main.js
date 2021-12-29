//
//  This file will handle onload events, dynamic resizing of the nav bar, 
//  and dark colour theme toggling
//


// Global for tracking dark/light mode
var mode = "light";

// Event listeners for dynamic sizing
window.addEventListener("resize", ResetNav);
window.addEventListener("load", ResetNav);

// Event listener to check for dark mode preference
window.addEventListener("load", CheckDark);


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
    // Default to light mode
    mode = "light";
  }
}


//
// Toggle the nav bar button menu
//
function ToggleNav() {
  // Get elements from DOM
  let navButton = document.getElementById('navImage');
  let nav = document.getElementById('nav');

  // Set up slide animation
  nav.style.transitionDuration = "700ms";

  // Light mode
  if(mode == "light") {
    // Check which image source is present and toggle it
    if(navButton.src.match("https://storage.googleapis.com/edwardboado.dev/images/ui/navButton.png")) {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navX.png";
      nav.style.right = "0";  // Slide the menu open
    }
    else {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navButton.png";
      nav.style.right = "-50%"; // Slide the menu closed
    }
  }
  // Dark mode
  else {
    // Check which image source is present and toggle it
    if(navButton.src.match("https://storage.googleapis.com/edwardboado.dev/images/ui/navButtonDark.png")) {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navXDark.png";
      nav.style.right = "0";  // Slide the menu open
    }
    else {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navButtonDark.png";
      nav.style.right = "-50%"; // Slide the menu closed
    }
  }
}


//
// Reset the nav bar after resizing
//
function ResetNav() {
  // Get elements from DOM
  let navButton = document.getElementById('navImage');
  let nav = document.getElementById('nav');
  let width = window.innerWidth;

  // Disable slide animation
  nav.style.transitionDuration = "0ms";

  // Set up for larger screens
  if(width > 750) {
    if(mode == "light") {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navX.png";
    }
    else {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navXDark.png";
    }
    nav.style.right = "0";  // Slide the menu open
  }
  // Set up for smaller screens
  else if(width < 750) {
    if(mode == "light") {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navButton.png";
    }
    else {
      navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navButtonDark.png";
    }
    nav.style.right = "-50%";  // Slide the menu closed
  }
}


//
// Close vertical nav bar
//
function CloseNav() {
  // Get width from the DOM
  let width = window.innerWidth;
  
  // If its smaller width, we know the vertical nav is used
  if(width < 750) {
    ToggleNav();
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
  document.documentElement.style.setProperty("--color-title", "#38b6ff");

  // Get elements from DOM
  let navButton = document.getElementById('navImage');
  let logo = document.getElementById('logo');
  let github = document.getElementById('github-contact');

  // Change elements to dark mode equivalents
  navButton.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/navButtonDark.png";
  logo.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/logoDark.png";
  github.src = "https://storage.googleapis.com/edwardboado.dev/images/ui/githubDark.png";
}





