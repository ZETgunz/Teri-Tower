import { loadMainMenu } from "./main.js";
import { userItems } from "../../users/items.js";
import { player } from "../player.js";
import { getItemType } from "../util.js";
import { getItemTitle } from "../util.js";
import { itemList } from "../../data/items/itemList.js";
import { itemData } from "../../data/items/itemData.js";

var selectedCategory = 0;
var selectedCategoryName = "";

function loadEquipsMenu() {
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    var equipBox = document.createElement("div");
    equipBox.setAttribute("class", `equipBox`);
    equipBox.setAttribute("id", `equipBox`);
    gameBox.appendChild(equipBox);

    var equipList = document.createElement("div");
    equipList.setAttribute("class", `equipList`);
    equipList.setAttribute("id", `equipList`);
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

    dropdownCategory();
    dropdownSort();
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

function dropdownCategory() {
    var dropdownButton = document.createElement("button");
    dropdownButton.setAttribute("class", `dropdownButtonEquipCategory`);
    dropdownButton.setAttribute("id", `dropdownButtonEquipCategory`);
    dropdownButton.setAttribute("open", `false`);
    dropdownButton.innerText = "Category";
    dropdownButton.addEventListener("click", function (e) {
        if (e.target.getAttribute("open") == "true") {
            var dropdownList = document.getElementById("dropdownListEquipCategory");
            dropdownButton.setAttribute("open", `false`);
            dropdownList.innerHTML = "";
            equipBox.removeChild(dropdownList);
            return;
        }
        e.target.setAttribute("open", `true`);
        var dropdownList = document.createElement("div");
        dropdownList.setAttribute("class", `dropdownListEquipCategory`);
        dropdownList.setAttribute("id", `dropdownListEquipCategory`);
        equipBox.appendChild(dropdownList);
        for (var i in itemList) {
            var dropdownOption = document.createElement("button");
            dropdownOption.setAttribute("class", `dropdownOptionEquipCategory`);
            dropdownOption.setAttribute("id", `dropdownOptionEquipCategory`);
            dropdownOption.setAttribute("category", `${itemList[i].type}`);
            dropdownOption.innerText = `${itemList[i].type}`;
            dropdownOption.addEventListener("click", function (e) {
                dropdownButton.innerText = `${e.target.innerText}`;
                scrollFill(e.target.innerHTML, "category");
                dropdownList.innerHTML = "";
                equipBox.removeChild(dropdownList);
                dropdownButton.setAttribute("open", `false`);
            });
            dropdownList.appendChild(dropdownOption);
        }
    });
    equipBox.appendChild(dropdownButton);
}

function dropdownSort() {
    var dropdownButton = document.createElement("button");
    dropdownButton.setAttribute("class", `dropdownButtonEquipSort`);
    dropdownButton.setAttribute("id", `dropdownButtonEquipSort`);
    dropdownButton.setAttribute("open", `false`);
    dropdownButton.innerText = "Sort";
    dropdownButton.addEventListener("click", function (e) {
        if (e.target.getAttribute("open") == "true") {
            var dropdownList = document.getElementById("dropdownListEquipSort");
            dropdownButton.setAttribute("open", `false`);
            dropdownList.innerHTML = "";
            equipBox.removeChild(dropdownList);
            return;
        }
        e.target.setAttribute("open", `true`);
        var dropdownList = document.createElement("div");
        dropdownList.setAttribute("class", `dropdownListEquipSort`);
        dropdownList.setAttribute("id", `dropdownListEquipSort`);
        equipBox.appendChild(dropdownList);
        for (var i in itemData.sort) {
            var dropdownOption = document.createElement("button");
            dropdownOption.setAttribute("class", `dropdownOptionEquipSort`);
            dropdownOption.setAttribute("id", `dropdownOptionEquipSort`);
            dropdownOption.setAttribute("sort", `${itemData.sort[i]}`);
            dropdownOption.innerText = `${itemData.sort[i]}`;
            dropdownOption.addEventListener("click", function (e) {
                dropdownButton.innerText = `${e.target.innerText}`;
                scrollFill(e.target.innerHTML, "sort");
                dropdownList.innerHTML = "";
                equipBox.removeChild(dropdownList);
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
    scrollFill('All');
}

function scrollFill(type, mode) {
    selectedCategoryName = type;
    selectedCategory = getItemType(type);
    var scrollEquip = document.getElementById("scrollEquip");
    scrollEquip.innerHTML = "";
    if (selectedCategory == 0) {
        var indexes = [];
        var counter = 0;
        for (var i in userItems[player].items) {
            if (userItems[player].items[i].type != 'eidolon') {
                indexes[counter] = i;
                counter += 1;
            }
        }
        for (var i in indexes) {
            var item = getItemTitle(userItems[player].items[indexes[i]].type, userItems[player].items[indexes[i]].id);
            var optionEquip = document.createElement("button");
            if (userItems[player].items[indexes[i]].count) {
                var text = document.createElement("p");
                text.setAttribute("class", `textEquip`);
                text.setAttribute("id", `textEquip`);
                text.innerText = `${userItems[player].items[indexes[i]].count}x`;
                optionEquip.appendChild(text);
            }
            optionEquip.setAttribute("class", `optionEquip`);
            optionEquip.setAttribute("id", `optionEquip`);
            optionEquip.setAttribute("item", `${item}`);
            optionEquip.style.background = `url('./src/images/items/${item}.png') no-repeat center center fixed`;
            optionEquip.style.backgroundSize = "cover";
            optionEquip.style.top = `${(244 * (Math.floor(i / 5)))}px`;
            optionEquip.style.left = `${(28 * ((i % 5) + 1)) + (216 * (i % 5)) - 7}px`;
            scrollEquip.appendChild(optionEquip);
        }
    }
    else {
        var indexes = [];
        var counter = 0;
        for (var i in userItems[player].items) {
            if (userItems[player].items[i].type == selectedCategoryName) {
                indexes[counter] = i;
                counter += 1;
            }
        }
        for (var i in indexes) {
            var item = getItemTitle(userItems[player].items[indexes[i]].type, userItems[player].items[indexes[i]].id);
            var optionEquip = document.createElement("button");
            if (userItems[player].items[indexes[i]].count) {
                var text = document.createElement("p");
                text.setAttribute("class", `textEquip`);
                text.setAttribute("id", `textEquip`);
                text.innerText = `${userItems[player].items[indexes[i]].count}x`;
                optionEquip.appendChild(text);
            }
            optionEquip.setAttribute("class", `optionEquip`);
            optionEquip.setAttribute("id", `optionEquip`);
            optionEquip.setAttribute("item", `${item}`);
            optionEquip.style.background = `url('./src/images/items/${item}.png') no-repeat center center fixed`;
            optionEquip.style.backgroundSize = "cover";
            optionEquip.style.top = `${(244 * (Math.floor(i / 5)))}px`;
            optionEquip.style.left = `${(28 * ((i % 5) + 1)) + (216 * (i % 5)) - 7}px`;
            scrollEquip.appendChild(optionEquip);
        }
    }
}

function fill(){
    
}

export { loadEquipsMenu }
