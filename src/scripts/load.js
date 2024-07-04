import { users } from "../users/login.js";
import { setPlayer } from "./player.js";
import { loadMainMenu } from "./mainMenu.js";

function loadGame(user){
    alert(`Welcome to Teri Tower, ${users[user].name}!`);
    setPlayer(user);
    loadMainMenu();
}

export {loadGame};