import { loadMainMenu } from "./main.js";

function loadCharsMenu() {
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    var charBox = document.createElement("div");
    charBox.setAttribute("class", `charBox`);
    charBox.setAttribute("id", `charBox`);
    gameBox.appendChild(charBox);

    var searchBar = document.createElement("input");
    searchBar.setAttribute("class", `searchBar`);
    searchBar.setAttribute("id", `searchBar`);
    searchBar.setAttribute("placeholder", `Search...`);
    charBox.appendChild(searchBar);

    var dropdownChar = document.createElement("div");
    dropdownChar.setAttribute("class",`dropdownChar`);
    dropdownChar.setAttribute("id",`dropdownChar`);
    var selectChar = document.createElement("select");
    selectChar.setAttribute("class",`selectChar`);
    selectChar.setAttribute("id",`selectChar`);
    var optionChar = document.createElement("option");
    optionChar.setAttribute("value",`default`);
    optionChar.innerText="Category";
    var scriptChar = document.createElement("script");
    var script = document.createElement("script");
    script.setAttribute("id",`scriptChar`);
    script.src="./src/scripts/menus/charDropdown.js";
    document.body.appendChild(script);
    selectChar.appendChild(optionChar);
    selectChar.appendChild(scriptChar);
    dropdownChar.appendChild(selectChar);
    charBox.appendChild(dropdownChar);
    var categories = ["All", "ER", "Herrschers", "Kiana", "Mei"]
    for (var i in categories) {
        var option = document.createElement("option"),
            txt = document.createTextNode(categories[i]);
        option.appendChild(txt);
        option.setAttribute('value', categories[i]);
        selectChar.insertBefore(option, selectChar.lastChild);
    }

    /*var tmp = document.createElement("div");
    tmp.style.height = "30px";
    tmp.style.width = "1200px";
    tmp.style.position = "absolute";
    tmp.style.top = "740px";
    tmp.style.left = "10px";
    tmp.style.outline = "yellowgreen solid 5px";
    charBox.appendChild(tmp);*/

    var buttonCharToMain = document.createElement("button");
    buttonCharToMain.setAttribute("class",`buttonCharToMain`);
    buttonCharToMain.setAttribute("id",`buttonCharToMain`);
    buttonCharToMain.addEventListener("click", back);
    buttonCharToMain.innerText="Back";
    charBox.appendChild(buttonCharToMain);
}

function back(){
    var scriptChar = document.getElementById("scriptChar");
    document.body.removeChild(scriptChar);
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML="";
    loadMainMenu();
}

export { loadCharsMenu }
