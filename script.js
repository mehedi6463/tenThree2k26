function showTitle(title, color, size) {
	
	const titleElement = document.getElementById('title');

	titleElement.textContent = title;
	titleElement.style.color = color;
	titleElement.style.fontSize = size;

	return titleElement;
}

showTitle('Welcome to My Project', 'red', '40px');

console.log('You can do it! yes you are the best one!');