const contactUsPage = () => {
    // contact us page module
    const ELEMENT = document.getElementById("content");

    // Contact Us Display
	const HEADER = document.createElement("h1");
	HEADER.innerHTML = "Via Fratelli";

	const PHONE_NUMBER = document.createElement("p");
	PHONE_NUMBER.innerHTML = "0423 082 781";

	const EMAIL = document.createElement("p");
	EMAIL.innerHTML = "contactus@viafratelli.com"

	ELEMENT.append(HEADER, PHONE_NUMBER, EMAIL);
}

export default contactUsPage;