import './style.css'

const navBar = () => {
	//Tabbed Options;
    const NAV_BAR = document.getElementById("navBar")

	const TABBED_OPTIONS = document.createElement("ul");
	TABBED_OPTIONS.classList.add("list")

	const HOME = document.createElement("li");
	HOME.id = "homeBtn";
	HOME.innerHTML = "HOME";
	const MENU = document.createElement("li");
	MENU.id = "menuBtn";
	MENU.innerHTML = "MENU";
	const CONTACT_US = document.createElement("li");
	CONTACT_US.id = "contactUsBtn";
	CONTACT_US.innerHTML = "CONTACT US";
	TABBED_OPTIONS.append(HOME, MENU, CONTACT_US);

    NAV_BAR.appendChild(TABBED_OPTIONS);
};

export default navBar;