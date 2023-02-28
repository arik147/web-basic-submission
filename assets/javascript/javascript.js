/* -------- Get Navbar element -------- */
var btnContainer = document.getElementById("Navbar");
/* -------- Get Menu items navbar element -------- */
var menuNavbar = btnContainer.getElementsByClassName("menu-items");

/* -------- Loop in items length -------- */
var i=0;
while (i < menuNavbar.length)
{
  /* if menu item clicked */
  menuNavbar[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the clicked menu navbar item
    this.className += " active";
  });
  i++;
}