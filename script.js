// Create default grid at 16, user is able to change this
const createGrid = (amountOfDivs) => {
    const grabMainDiv = document.getElementById("htmlMainBox");
    document.querySelectorAll(".createdDivs").forEach(div => div.remove()); //remove old boxes
    const divsInRow = Math.ceil(Math.sqrt(amountOfDivs)); // Try to make it square-like
    const containerWidth = grabMainDiv.clientWidth;

    const divSize = (containerWidth / divsInRow) + "px"; 

    // Create the requested number of divs
    for (let i = 0; i < amountOfDivs; i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("createdDivs");
        createDiv.innerText = "hello";
        createDiv.style.width = divSize; 
        createDiv.style.height = divSize; 
        grabMainDiv.appendChild(createDiv);
    }
};

// On load, create 16 divs (default)
createGrid(16);

const userChangeGrid = document.getElementById("userChangeGrid");
userChangeGrid.addEventListener("click", () => {
    let askGrid = prompt("Enter new grid size:");
    askGrid = parseInt(askGrid);
    while (isNaN(askGrid) || askGrid <= 0 || askGrid > 150) {
        if (askGrid > 150) {
            alert("Please enter a number less than 150");
        } else if (isNaN(askGrid) || askGrid <= 0) {
            alert("Please enter a valid number");
        }

    }
    createGrid(askGrid);
});
