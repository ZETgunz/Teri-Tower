import { users } from "../users/login.js";

var player;

function loadGame(user){
    alert(`Welcome to Teri Tower, ${users[user].name}!`);
    player = user;
    loadMainMenu();
}

function loadMainMenu(){
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = `${users[player].name}`;
}

export {loadGame};