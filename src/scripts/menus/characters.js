function loadCharsMenu(){
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML="";
    var charBox = document.createElement("div");
    charBox.setAttribute("class",`charBox`);
    charBox.setAttribute("id",`charBox`);
    gameBox.appendChild(charBox);
}

export {loadCharsMenu}