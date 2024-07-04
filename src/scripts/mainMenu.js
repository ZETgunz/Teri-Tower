function loadMainMenu(){
    var gameBox = document.getElementById("gameBox");
    //gameBox.innerHTML = `${users[player].name}`;

    var buttonRoulette = document.createElement("button");
    buttonRoulette.setAttribute("class",`buttonRoulette`);
    buttonRoulette.setAttribute("id",`buttonRoulette`);
    buttonRoulette.addEventListener("click",loadRouletteMenu);
    gameBox.appendChild(buttonRoulette);

    var buttonAttack = document.createElement("button");
    buttonAttack.setAttribute("class",`buttonAttack`);
    buttonAttack.setAttribute("id",`buttonAttack`);
    buttonAttack.addEventListener("click",loadAttackMenu);
    gameBox.appendChild(buttonAttack);

    var buttonChars = document.createElement("button");
    buttonChars.setAttribute("class",`buttonChars`);
    buttonChars.setAttribute("id",`buttonChars`);
    buttonChars.addEventListener("click",loadCharsMenu);
    gameBox.appendChild(buttonChars);

    var buttonElfs = document.createElement("button");
    buttonElfs.setAttribute("class",`buttonElfs`);
    buttonElfs.setAttribute("id",`buttonElfs`);
    buttonElfs.addEventListener("click",loadElfsMenu);
    gameBox.appendChild(buttonElfs);

    var buttonEquips = document.createElement("button");
    buttonEquips.setAttribute("class",`buttonEquips`);
    buttonEquips.setAttribute("id",`buttonEquips`);
    buttonEquips.addEventListener("click",loadEquipsMenu);
    gameBox.appendChild(buttonEquips);

    var buttonEidolons = document.createElement("button");
    buttonEidolons.setAttribute("class",`buttonEidolons`);
    buttonEidolons.setAttribute("id",`buttonEidolons`);
    buttonEidolons.addEventListener("click",loadEidolonsMenu);
    gameBox.appendChild(buttonEidolons);

    var buttonForge = document.createElement("button");
    buttonForge.setAttribute("class",`buttonForge`);
    buttonForge.setAttribute("id",`buttonForge`);
    buttonForge.addEventListener("click",loadForgeMenu);
    gameBox.appendChild(buttonForge);

    var buttonUpgrade = document.createElement("button");
    buttonUpgrade.setAttribute("class",`buttonUpgrade`);
    buttonUpgrade.setAttribute("id",`buttonUpgrade`);
    buttonUpgrade.addEventListener("click",loadUpgradeMenu);
    gameBox.appendChild(buttonUpgrade);
}

function loadRouletteMenu(){}
function loadAttackMenu(){}
function loadCharsMenu(){}
function loadElfsMenu(){}
function loadEquipsMenu(){}
function loadEidolonsMenu(){}
function loadForgeMenu(){}
function loadUpgradeMenu(){}

export {loadMainMenu}