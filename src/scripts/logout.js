import { users } from "../users/login.js";
import { player } from "./player.js";
import { setPlayer } from "./player.js";
import { loginForm } from "./login.js";

function logout(){
    var gameBox = document.getElementById("gameBox");
    alert(`See you soon, ${users[player].name}.`);
    gameBox.innerHTML="";
    setPlayer(null);
    loginForm();
}

export {logout};