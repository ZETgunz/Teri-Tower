import { loadMainMenu } from "./main.js";
import { userItems } from "../../users/items.js";
import { eidolonList } from "../../data/items/eidolonList.js";
import { player } from "../player.js";
import { getEidolonTitle } from "../util.js";
import { itemData } from "../../data/items/itemData.js";

function loadEidolonsMenu() {
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    var eidolonBox = document.createElement("div");
    eidolonBox.setAttribute("class", `eidolonBox`);
    eidolonBox.setAttribute("id", `eidolonBox`);
    gameBox.appendChild(eidolonBox);

    var eidolonList = document.createElement("div");
    eidolonList.setAttribute("class", `eidolonList`);
    eidolonList.setAttribute("id", `eidolonList`);
    eidolonBox.appendChild(eidolonList);

    var searchBar = document.createElement("input");
    searchBar.setAttribute("class", `searchBarEidolon`);
    searchBar.setAttribute("id", `searchBarEidolon`);
    searchBar.setAttribute("type", `text`);
    searchBar.setAttribute("placeholder", `Search...`);
    searchBar.addEventListener("keyup", function (e) {
        var input = document.getElementById("searchBarEidolon").value;
        var filter = input.toUpperCase();
        if (input == "") {
            scrollFill();
        }
        else {
            scrollFill(filter);
        }
    });
    eidolonBox.appendChild(searchBar);

    dropdownSort();
    scroll();

    var buttonEidolonToMain = document.createElement("button");
    buttonEidolonToMain.setAttribute("class", `buttonEidolonToMain`);
    buttonEidolonToMain.setAttribute("id", `buttonEidolonToMain`);
    buttonEidolonToMain.addEventListener("click", function (e) {
        var gameBox = document.getElementById("gameBox");
        gameBox.innerHTML = "";
        loadMainMenu();
    });
    buttonEidolonToMain.innerText = "Back";
    eidolonBox.appendChild(buttonEidolonToMain);
}

function dropdownSort() {
    var dropdownButton = document.createElement("button");
    dropdownButton.setAttribute("class", `dropdownButtonEidolonSort`);
    dropdownButton.setAttribute("id", `dropdownButtonEidolonSort`);
    dropdownButton.setAttribute("open", `false`);
    dropdownButton.innerText = "Sort";
    dropdownButton.addEventListener("click", function (e) {
        if (e.target.getAttribute("open") == "true") {
            var dropdownList = document.getElementById("dropdownListEidolonSort");
            dropdownButton.setAttribute("open", `false`);
            dropdownList.innerHTML = "";
            eidolonBox.removeChild(dropdownList);
            return;
        }
        e.target.setAttribute("open", `true`);
        var dropdownList = document.createElement("div");
        dropdownList.setAttribute("class", `dropdownListEidolonSort`);
        dropdownList.setAttribute("id", `dropdownListEidolonSort`);
        eidolonBox.appendChild(dropdownList);
        for (var i in itemData.sort) {
            var dropdownOption = document.createElement("button");
            dropdownOption.setAttribute("class", `dropdownOptionEidolonSort`);
            dropdownOption.setAttribute("id", `dropdownOptionEidolonSort`);
            dropdownOption.setAttribute("sort", `${itemData.sort[i]}`);
            dropdownOption.innerText = `${itemData.sort[i]}`;
            dropdownOption.addEventListener("click", function (e) {
                dropdownButton.innerText = `${e.target.innerText}`;
                scrollFill(e.target.innerHTML, "sort");
                dropdownList.innerHTML = "";
                eidolonBox.removeChild(dropdownList);
                dropdownButton.setAttribute("open", `false`);
            });
            dropdownList.appendChild(dropdownOption);
        }
    });
    eidolonBox.appendChild(dropdownButton);
}

function scroll() {
    var scrollEidolon = document.createElement("div");
    scrollEidolon.setAttribute("class", `scrollEidolon`);
    scrollEidolon.setAttribute("id", `scrollEidolon`);
    eidolonBox.appendChild(scrollEidolon);
    scrollFill();
}

function scrollFill(filter) {
    var scrollEidolon = document.getElementById("scrollEidolon");
    scrollEidolon.innerHTML = "";
    var indexes = [];
    var counter = 0;
    for (var i in userItems[player].items) {
        if (userItems[player].items[i].type == 'eidolon') {
            if (filter) {
                if (getEidolonTitle(userItems[player].items[i].id).includes(filter)) {
                    indexes[counter] = i;
                    counter += 1;
                }
            }
            else {
                indexes[counter] = i;
                counter += 1;
            }
        }
    }
    for (var i in indexes) {
        var item = getEidolonTitle(userItems[player].items[indexes[i]].id);
        var optionEidolon = document.createElement("button");
        optionEidolon.setAttribute("class", `optionEidolon`);
        optionEidolon.setAttribute("id", `optionEidolon`);
        optionEidolon.setAttribute("item", `${item}`);
        optionEidolon.style.background = `url('./src/images/eidolon/${item}.png') no-repeat center center fixed`;
        optionEidolon.style.backgroundSize = "cover";
        optionEidolon.style.top = `${(244 * (Math.floor(i / 5)))}px`;
        optionEidolon.style.left = `${(28 * ((i % 5) + 1)) + (216 * (i % 5)) - 7}px`;
        /* for larger icons
        optionEidolon.style.top = `${(306 * (Math.floor(i / 4)))}px`;
        optionEidolon.style.left = `${(18 * ((i % 4) + 1)) + (288 * (i % 4)) - 7}px`;
        */
        scrollEidolon.appendChild(optionEidolon);
    }
}

function fill() {

}

export { loadEidolonsMenu }
