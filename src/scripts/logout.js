import { setPlayer } from "./player.js";
import { loginForm } from "./login.js";

function logout(){
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML="";
    setPlayer(null);
    loginForm();
}

export {logout};