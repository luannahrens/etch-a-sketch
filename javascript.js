let container = document.getElementsByClassName('container')[0];
for (i = 0; i < 256; i++){
    let newDiv = document.createElement('div');
    newDiv.textContent = i;
    newDiv.className = "item";
    container.appendChild(newDiv);
    
}

