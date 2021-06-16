import bg from "./wood-fire-pizza.jpg";


const homePage = () => {
	const ELEMENT = document.getElementById("content");

	//Tabbed Options;
	const TABBED_OPTIONS = document.createElement("ul");
	const HOME = document.createElement("li");
    HOME.id = "homeBtn";
	HOME.innerHTML = "HOME";
	const MENU = document.createElement("li");
    MENU.id = "menuBtn";
	MENU.innerHTML = "MENU";
	const CONTACT_US = document.createElement("li");
    CONTACT_US.id = "contactUsBtn"
	CONTACT_US.innerHTML = "CONTACT US";
	TABBED_OPTIONS.append(HOME, MENU, CONTACT_US);

    // Home Page Display
	const HEADER = document.createElement("h1");
	HEADER.innerHTML = "Via Fratelli";

	const SUB_TEXT = document.createElement("h2");
	SUB_TEXT.innerHTML = "Authentic Wood-Fired Pizza Ristorante";

	const IMAGE = new Image();
	IMAGE.src = bg;

	ELEMENT.append(HEADER, SUB_TEXT, IMAGE);
}


export default homePage;