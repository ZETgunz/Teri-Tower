import { loadMainMenu } from "./main.js";
import { charList } from "../../res/data/charList.js";
import { getCategory } from "../util.js";

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

    dropdown();

    scroll();

    /*var tmp = document.createElement("div");
    tmp.style.height = "30px";
    tmp.style.width = "1200px";
    tmp.style.position = "absolute";
    tmp.style.top = "740px";
    tmp.style.left = "10px";
    tmp.style.outline = "yellowgreen solid 5px";
    charBox.appendChild(tmp);*/

    var buttonCharToMain = document.createElement("button");
    buttonCharToMain.setAttribute("class", `buttonCharToMain`);
    buttonCharToMain.setAttribute("id", `buttonCharToMain`);
    buttonCharToMain.addEventListener("click", back);
    buttonCharToMain.innerText = "Back";
    charBox.appendChild(buttonCharToMain);
}

function dropdown() {
    var dropdownChar = document.createElement("div");
    dropdownChar.setAttribute("class", `dropdownChar`);
    dropdownChar.setAttribute("id", `dropdownChar`);
    var selectChar = document.createElement("select");
    selectChar.setAttribute("class", `selectChar`);
    selectChar.setAttribute("id", `selectChar`);
    var optionChar = document.createElement("option");
    optionChar.setAttribute("value", `default`);
    optionChar.innerText = "Category";
    var scriptChar = document.createElement("script");
    var script = document.createElement("script");
    script.setAttribute("id", `scriptChar`);
    script.setAttribute("type",`module`);
    script.src = "./src/scripts/menus/charDropdown.js";
    document.body.appendChild(script);
    selectChar.appendChild(optionChar);
    selectChar.appendChild(scriptChar);
    dropdownChar.appendChild(selectChar);
    charBox.appendChild(dropdownChar);
    for (var i in charList) {
        var option = document.createElement("option"),
            txt = document.createTextNode(charList[i].category);
        option.appendChild(txt);
        option.setAttribute('value', charList[i].category);
        selectChar.insertBefore(option, selectChar.lastChild);
    }
}

function scroll() {
    var scrollChar = document.createElement("div");
    scrollChar.setAttribute("class", `scrollChar`);
    scrollChar.setAttribute("id", `scrollChar`);
    charBox.appendChild(scrollChar);
    scrollFill("All");
}

function scrollFill(category) {
    var scrollChar = document.getElementById("scrollChar");
    scrollChar.innerHTML = "";
    if (category == "All") {
        for (var i in charList) {
            for (var j in charList[i].chars) {
                var optionChar = document.createElement("button");
                optionChar.setAttribute("class", `optionChar`);
                optionChar.setAttribute("id", `optionChar`);
                optionChar.setAttribute("char", `${charList[i].chars[j].title}`);
                optionChar.style.background = `url('./src/res/char/${charList[i].chars[j].title}.png') no-repeat center center fixed`;
                optionChar.style.backgroundSize = "cover";
                //if(i!=charList[i].length-1)
                optionChar.style.marginRight = "10px";
                scrollChar.appendChild(optionChar);
            }
        }
    }
    else {
        var selecedCategory = getCategory(category);
        console.log(selecedCategory);
        for (var i in charList[selecedCategory].chars) {
            var optionChar = document.createElement("button");
            optionChar.setAttribute("class", `optionChar`);
            optionChar.setAttribute("id", `optionChar`);
            optionChar.setAttribute("char", `${charList[selecedCategory].chars[i].title}`);
            optionChar.style.background = `url('./src/res/char/${charList[selecedCategory].chars[i].title}.png') no-repeat center center fixed`;
            optionChar.style.backgroundSize = "cover";
            if(i!=charList[selecedCategory].chars.length-1) optionChar.style.marginRight = "10px";
            scrollChar.appendChild(optionChar);
        }
    }
}

function back() {
    var scriptChar = document.getElementById("scriptChar");
    document.body.removeChild(scriptChar);
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    loadMainMenu();
}

export { loadCharsMenu };
export { scrollFill };