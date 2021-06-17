const menuPage = () => {
    // menu page module
	const ELEMENT = document.getElementById("content");
    // Contact Us Display
	const HEADER = document.createElement("h1")
	HEADER.innerHTML = "Via Fratelli";

	const FOOD_ITEMS = document.createElement("p");
	FOOD_ITEMS.innerHTML = "Margarita Pizza";

	const EMAIL = document.createElement("p");
	EMAIL.innerHTML = "contactus@viafratelli.com"

	ELEMENT.append(HEADER, FOOD_ITEMS, EMAIL);

}

export default menuPage;