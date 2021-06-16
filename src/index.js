import bg from "./wood-fire-pizza.jpg";

// Implement all DOM;
const homePage = () => {
	const ELEMENT = document.createElement("div");

	//Tabbed Options;
	const TABBED_OPTIONS = document.createElement("ul");

	const HOME = document.createElement("li");
	HOME.innerHTML = "HOME";


	const MENU = document.createElement("li");
	MENU.innerHTML = "MENU";

	const CONTACT_US = document.createElement("li");
	CONTACT_US.innerHTML = "CONTACT US";

	TABBED_OPTIONS.append(HOME, MENU, CONTACT_US);


    // Home Page Display
	const HEADER = document.createElement("h1");
	HEADER.innerHTML = "Via Fratelli";

	const SUB_TEXT = document.createElement("h2");
	SUB_TEXT.innerHTML = "Authentic Wood-Fired Pizza Ristorante";

	const IMAGE = new Image();
	IMAGE.src = bg;

	ELEMENT.append(TABBED_OPTIONS, HEADER, SUB_TEXT, IMAGE);

	return ELEMENT;
}

document.body.appendChild(homePage());


const menuPage = () => {
    // menu page module
}


const contactUsPage = () => {
    // contact us page module
}

// Tab switching
const tabSwitch = () => {

}

