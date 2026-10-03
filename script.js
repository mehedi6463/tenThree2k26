function showName(name, color) {
	const heading = document.getElementById("name");
	heading.textContent = name;
	heading.style.color = color;
}

showName("Mehedi", "blue");
