import { loadCharsMenu } from "./characters.js";

import { logout } from "../logout.js";

function loadMainMenu(){
    var gameBox = document.getElementById("gameBox");
    var bg = document.createElement("img");
    bg.setAttribute("src",`src/res/bg/Destiny-1.jpeg`);
    gameBox.appendChild(bg);

    var buttonRoulette = document.createElement("button");
    buttonRoulette.setAttribute("class",`buttonRoulette`);
    buttonRoulette.setAttribute("id",`buttonRoulette`);
    buttonRoulette.addEventListener("click",loadRouletteMenu);
    buttonRoulette.innerText="Rouletter";
    gameBox.appendChild(buttonRoulette);

    var buttonAttack = document.createElement("button");
    buttonAttack.setAttribute("class",`buttonAttack`);
    buttonAttack.setAttribute("id",`buttonAttack`);
    buttonAttack.addEventListener("click",loadAttackMenu);
    buttonAttack.innerText="Attack";
    gameBox.appendChild(buttonAttack);

    var buttonChars = document.createElement("button");
    buttonChars.setAttribute("class",`buttonChars`);
    buttonChars.setAttribute("id",`buttonChars`);
    buttonChars.addEventListener("click",loadCharsMenu);
    buttonChars.innerText="Characters";
    gameBox.appendChild(buttonChars);

    var buttonElfs = document.createElement("button");
    buttonElfs.setAttribute("class",`buttonElfs`);
    buttonElfs.setAttribute("id",`buttonElfs`);
    buttonElfs.addEventListener("click",loadElfsMenu);
    buttonElfs.innerText="ELF";
    gameBox.appendChild(buttonElfs);

    var buttonEquips = document.createElement("button");
    buttonEquips.setAttribute("class",`buttonEquips`);
    buttonEquips.setAttribute("id",`buttonEquips`);
    buttonEquips.addEventListener("click",loadEquipsMenu);
    buttonEquips.innerText="Equipment";
    gameBox.appendChild(buttonEquips);

    var buttonEidolons = document.createElement("button");
    buttonEidolons.setAttribute("class",`buttonEidolons`);
    buttonEidolons.setAttribute("id",`buttonEidolons`);
    buttonEidolons.addEventListener("click",loadEidolonsMenu);
    buttonEidolons.innerText="Eidolons";
    gameBox.appendChild(buttonEidolons);

    var buttonForge = document.createElement("button");
    buttonForge.setAttribute("class",`buttonForge`);
    buttonForge.setAttribute("id",`buttonForge`);
    buttonForge.addEventListener("click",loadForgeMenu);
    buttonForge.innerText="Forge";
    gameBox.appendChild(buttonForge);

    var buttonUpgrade = document.createElement("button");
    buttonUpgrade.setAttribute("class",`buttonUpgrade`);
    buttonUpgrade.setAttribute("id",`buttonUpgrade`);
    buttonUpgrade.addEventListener("click",loadUpgradeMenu);
    buttonUpgrade.innerText="Upgrade";
    gameBox.appendChild(buttonUpgrade);

    var buttonLogout = document.createElement("button");
    buttonLogout.setAttribute("class",`buttonLogout`);
    buttonLogout.setAttribute("id",`buttonLogout`);
    buttonLogout.addEventListener("click",logout);
    buttonLogout.innerText="⬱ Leave";
    gameBox.appendChild(buttonLogout);
}

function loadRouletteMenu(){}
function loadAttackMenu(){}
//function loadCharsMenu(){}
function loadElfsMenu(){}
function loadEquipsMenu(){}
function loadEidolonsMenu(){}
function loadForgeMenu(){}
function loadUpgradeMenu(){}

export {loadMainMenu}