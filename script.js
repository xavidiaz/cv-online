/* Interaktivitet Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/* sanwich menu */

function mMenu() {
  var x = document.getElementById("nav-menu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function fullHeader() {
  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " fullHeader";
  } else {
    x.className = "header";
  }
}
