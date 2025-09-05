const gridContainer = document.querySelector('.grid-container');
const gridSizeBtn = document.querySelector('#grid-size-btn');
const inputSizeGrid = document.querySelector('#grid-size');
const inputFeedback = document.querySelector('#input-feedback');

// Turn an element of the grid black when mouseovered
const turnBlack = (element) => {
	return (element.style.backgroundColor = 'black');
};

// Generate a random number between 0 and num
const randomNum = (num) => {
	return Math.floor(Math.random() * num);
};

// Turn an element of the grid into a random RGB color;
const turnRGB = (element) => {
	return (element.style.backgroundColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`);
};

// Function to create any grid given a size
const createGrid = (size, isCheckboxChecked) => {
	let arrayOfDivs = [];

	for (let i = 0; i < size * size; i++) {
		let oneSquare = document.createElement('div');
		const squareSize = 480 / size;

		oneSquare.setAttribute('class', 'square-div');
		oneSquare.style.width = `${squareSize}px`;
		oneSquare.style.height = `${squareSize}px`;

		if (isCheckboxChecked) {
			oneSquare.addEventListener('mouseover', (e) => turnRGB(e.target), { once: true });
		} else {
			oneSquare.addEventListener('mouseover', (e) => turnBlack(e.target), { once: true });
		}

		arrayOfDivs.push(oneSquare);
	}

	return arrayOfDivs;
};

// Add an EventListener to the "Add Grid" button to generate a grid
gridSizeBtn.addEventListener('click', () => {
	const sizeGrid = parseInt(inputSizeGrid.value);
	if (sizeGrid < 1 || sizeGrid > 100 || isNaN(sizeGrid)) {
		inputFeedback.textContent = 'Please enter a number between 1 and 100.';
		return;
	}
	gridContainer.textContent = '';
	const checkbox = document.querySelector('#random-colors');
	const isCheckboxChecked = checkbox.checked;
	console.log(isCheckboxChecked);
	const createdGrid = createGrid(inputSizeGrid.value, isCheckboxChecked);
	inputFeedback.textContent = `A grid of size ${inputSizeGrid.value} by ${inputSizeGrid.value} has been generated!`;
	/* gridContainer.style.border = '2px solid black'; */
	gridContainer.append(...createdGrid);
});
