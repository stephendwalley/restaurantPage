import navBar from "./navBar"
import homePage from "./home"
import menuPage from "./menu"
import contactUsPage from "./contactUs"


// On page Load calls home:
navBar();
homePage();


// Event listeners for tabs
const HOME_BTN = document.getElementById("homeBtn");
const MENU_BTN = document.getElementById("menuBtn")
const CONTACT_US = document.getElementById("contactUsBtn")

HOME_BTN.addEventListener("click", () => {
    document.getElementById("content").innerHTML = ""; //wipes current page
    homePage();
})

MENU_BTN.addEventListener("click", () => {
    document.getElementById("content").innerHTML = ""; //wipes current page
    menuPage();
})

CONTACT_US.addEventListener("click", () => {
    document.getElementById("content").innerHTML = ""; //wipes current page
    contactUsPage();
})




