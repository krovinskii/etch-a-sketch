//Create default grid at 16, user is able to change this
const createGrid = (amountOfDivs) => {
    document.querySelectorAll(".createdDivs").forEach(div => div.remove());
    for (let i=0; i < amountOfDivs; i++) {
        const grabMainDiv = document.getElementById("htmlMainBox");
        const createDiv = document.createElement("div");
        createDiv.classList.add("createdDivs");
        createDiv.innerText = "hello";
        htmlMainBox.appendChild(createDiv);
    }
};
//On load, create 16 divs. 
createGrid(16);

const userChangeGrid = document.getElementById("userChangeGrid");
userChangeGrid.addEventListener("click", () => {
    const askGrid = prompt("Enter new grid size:");
    if (askGrid > 15) {
        alert("Please enter a number less than 15")
        //How do I call askGrid again right after the alert?
    }
    const checkIfNumber = (isNaN(askGrid)) ? alert("Please enter a number") : false; // Ternary for reduced clutter, better readability.. 
    console.log(askGrid);
    createGrid(askGrid);
    //Need to take users input and pass it to this function
});
