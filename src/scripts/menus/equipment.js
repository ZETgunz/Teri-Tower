import { loadMainMenu } from "./main.js";
import { userItems } from "../../users/items.js";
import { player } from "../player.js";
import { getItemTitle } from "../util.js";

var selectedCategory = 0;
var selectedCategoryName = "";

function loadEquipsMenu(){
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    var equipBox = document.createElement("div");
    equipBox.setAttribute("class", `equipBox`);
    equipBox.setAttribute("id", `equipBox`);
    gameBox.appendChild(equipBox);

    var equipList = document.createElement("div");
    equipList.setAttribute("class",`equipList`);
    equipList.setAttribute("id",`equipList`);
    equipBox.appendChild(equipList);

    var searchBar = document.createElement("input");
    searchBar.setAttribute("class", `searchBarEquips`);
    searchBar.setAttribute("id", `searchBarEquips`);
    searchBar.setAttribute("type", `text`);
    searchBar.setAttribute("placeholder", `Search...`);
    searchBar.addEventListener("keyup", function (e) {
        var input = document.getElementById("searchBarEquips").value;
        var filter = input.toUpperCase();
        if (input == "") {
            //scrollFill();
        }
        else {
            //scrollSearch(filter);
        }
    });
    equipBox.appendChild(searchBar);

    dropdown();
    scroll();

    var buttonEquipToMain = document.createElement("button");
    buttonEquipToMain.setAttribute("class", `buttonEquipToMain`);
    buttonEquipToMain.setAttribute("id", `buttonEquipToMain`);
    buttonEquipToMain.addEventListener("click", function (e) {
        var gameBox = document.getElementById("gameBox");
        gameBox.innerHTML = "";
        loadMainMenu();
    });
    buttonEquipToMain.innerText = "Back";
    equipBox.appendChild(buttonEquipToMain);
}

function dropdown() {
    var dropdownButton = document.createElement("button");
    dropdownButton.setAttribute("class", `dropdownButtonEquip`);
    dropdownButton.setAttribute("id", `dropdownButtonEquip`);
    dropdownButton.setAttribute("open", `false`);
    dropdownButton.innerText = "Category";
    dropdownButton.addEventListener("click", function (e) {
        if (e.target.getAttribute("open") == "true") {
            var dropdownList = document.getElementById("dropdownListEquip");
            dropdownButton.setAttribute("open", `false`);
            dropdownList.innerHTML = "";
            charBox.removeChild(dropdownList);
            return;
        }
        e.target.setAttribute("open", `true`);
        var dropdownList = document.createElement("div");
        dropdownList.setAttribute("class", `dropdownListEquip`);
        dropdownList.setAttribute("id", `dropdownListEquip`);
        charBox.appendChild(dropdownList);
        for (var i in charList) {
            var dropdownOption = document.createElement("button");
            dropdownOption.setAttribute("class", `optionSortEquip`);
            dropdownOption.setAttribute("id", `optionSortEquip`);
            dropdownOption.setAttribute("category", `${charList[i].category}`);
            dropdownOption.innerText = `${charList[i].category}`;
            dropdownOption.addEventListener("click", function (e) {
                dropdownButton.innerText = `${e.target.innerText}`;
                scrollFill(e.target.innerHTML);
                dropdownList.innerHTML = "";
                charBox.removeChild(dropdownList);
                dropdownButton.setAttribute("open", `false`);
            });
            dropdownList.appendChild(dropdownOption);
        }
    });
    equipBox.appendChild(dropdownButton);
}

function scroll() {
    var scrollEquip = document.createElement("div");
    scrollEquip.setAttribute("class", `scrollEquip`);
    scrollEquip.setAttribute("id", `scrollEquip`);
    equipBox.appendChild(scrollEquip);
    //scrollFill('All');
    for(var i in userItems[player].items){
        var item = getItemTitle(userItems[player].items[i].type,userItems[player].items[i].id);
        console.log(i);
        var optionEquip = document.createElement("button");
                optionEquip.setAttribute("class", `optionEquip`);
                optionEquip.setAttribute("id", `optionEquip`);
                optionEquip.setAttribute("item", `${item}`);
                optionEquip.style.background = `url('./src/images/items/${item}.png') no-repeat center center fixed`;
                optionEquip.style.backgroundSize = "cover";
                optionEquip.style.top = `${(244*(Math.floor(i/5)))}px`;
                optionEquip.style.left = `${(28*((i%5)+1)) + (216*(i%5)) - 7}px`;
                scrollEquip.appendChild(optionEquip);
    }
}

/*function scrollFill(category) {
    selectedCategoryName = category;
    selectedCategory = getCategory(category);
    var scrollChar = document.getElementById("scrollChar");
    scrollChar.innerHTML = "";
    if (selectedCategory == 0) {
        for (var i in charList) {
            for (var j in charList[i].chars) {
                var optionChar = document.createElement("button");
                optionChar.setAttribute("class", `optionChar`);
                optionChar.setAttribute("id", `optionChar`);
                optionChar.setAttribute("char", `${charList[i].chars[j].title}`);
                optionChar.style.background = `url('./src/images/char/${charList[i].chars[j].title}.png') no-repeat center center fixed`;
                optionChar.style.backgroundSize = "cover";
                optionChar.style.marginRight = "10px";
                scrollChar.appendChild(optionChar);
            }
        }
        scrollChar.lastChild.style.marginRight = "0px";
    }
    else {
        for (var i in charList[selectedCategory].chars) {
            var optionChar = document.createElement("button");
            optionChar.setAttribute("class", `optionChar`);
            optionChar.setAttribute("id", `optionChar`);
            optionChar.setAttribute("char", `${charList[selectedCategory].chars[i].title}`);
            optionChar.style.background = `url('./src/images/char/${charList[selectedCategory].chars[i].title}.png') no-repeat center center fixed`;
            optionChar.style.backgroundSize = "cover";
            if (i != charList[selectedCategory].chars.length - 1) optionChar.style.marginRight = "10px";
            scrollChar.appendChild(optionChar);
        }
    }
}*/

export {loadEquipsMenu}