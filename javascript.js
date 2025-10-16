let container = document.getElementsByClassName('container')[0];
function drawGrid(size){
    container.textContent = "";
    for (i = 0; i < (size*size); i++){
        let newDiv = document.createElement('div');
        newDiv.textContent = i;
        newDiv.className = "item";
        newDiv.style.height = `calc(100% * (1/${size}))`;
        newDiv.style.width = `calc(100% * (1/${size}))`;
        newDiv.addEventListener('mouseenter', function() {
            // Code to execute when the mouse enters the element
            console.log('Mouse entered!');
            newDiv.style.backgroundColor = 'indigo';
        });
        container.appendChild(newDiv);
        
    }
}

drawGrid(16);
btnSize = document.getElementById("size");
btnSize.addEventListener("click", () => {
    let userInput = prompt("Please enter a new grid size: ");
    if (userInput <= 100) {
        drawGrid(userInput);
    } else {
        alert ("Size must be 100 or lower.");
    }
});


