import bg from './wood-fire-pizza.jpg'

// Implement all DOM;
function component() {
	const ELEMENT = document.createElement("div");

    const HEADER = document.createElement("h1");
    HEADER.innerHTML = "Via Fratelli"
    ELEMENT.appendChild(HEADER);

    const SUBTEXT = document.createElement("h2");
    SUBTEXT.innerHTML = "Authentic Wood-Fired Pizza Ristorante"
    ELEMENT.appendChild(SUBTEXT);

    const IMAGE = new Image();
    IMAGE.src = bg;
    ELEMENT.appendChild(IMAGE);

	return ELEMENT;
}

document.body.appendChild(component());
