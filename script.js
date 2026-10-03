function showTitle(title, color) {
	const titleElement = document.getElementById('title');
	titleElement.textContent = title;
	titleElement.style.color = color;

	return titleElement;
}

showTitle('Welcome to My Project', 'red');
