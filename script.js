const createGrid = (gridSize) => {
    const grabMainDiv = document.getElementById("htmlMainBox");
    document.querySelectorAll(".createdDivs").forEach(div => div.remove()); //remove old boxes
    
    const divSize = (960 / gridSize) + "px";  // Fixed container size of 960px divided by grid size
    
    // Create a perfect square grid (gridSize × gridSize)
    const totalDivs = gridSize * gridSize;
    for (let i = 0; i < totalDivs; i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("createdDivs");
        createDiv.style.width = divSize;
        createDiv.style.height = divSize;
        createDiv.addEventListener('mouseover', () => {
            createDiv.style.backgroundColor = getRandomColor();
        });
        grabMainDiv.appendChild(createDiv);
    }
};

// On load, create a 16×16 grid (default)
createGrid(16);

const userChangeGrid = document.getElementById("userChangeGrid");
userChangeGrid.addEventListener("click", () => {
    let size = prompt("Enter grid size (e.g., 16 will create a 16×16 grid):");
    size = parseInt(size);
    
    if (isNaN(size) || size <= 0) {
        alert("Please enter a valid number");
        return;
    }
    
    if (size > 100) {
        alert("Please enter a number less than or equal to 100");
        return;
    }
    
    createGrid(size);
});

//change color

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

