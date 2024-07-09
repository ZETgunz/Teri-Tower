import { loadMainMenu } from "./main.js";
import { charList } from "../../data/charList.js";
import { getCategory } from "../util.js";

var selectedCategory = 0;
var selectedCategoryName = "";

function loadCharsMenu() {
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    var charBox = document.createElement("div");
    charBox.setAttribute("class", `charBox`);
    charBox.setAttribute("id", `charBox`);
    gameBox.appendChild(charBox);

    var searchBar = document.createElement("input");
    searchBar.setAttribute("class", `searchBarChar`);
    searchBar.setAttribute("id", `searchBarChar`);
    searchBar.setAttribute("type", `text`);
    searchBar.setAttribute("placeholder", `Search...`);
    searchBar.addEventListener("keyup", function (e) {
        var input = document.getElementById("searchBarChar").value;
        var filter = input.toUpperCase();
        if (input == "") {
            scrollFill(selectedCategoryName);
        }
        else {
            scrollSearch(filter);
        }
    });
    charBox.appendChild(searchBar);

    dropdown();
    scroll();

    var buttonCharToMain = document.createElement("button");
    buttonCharToMain.setAttribute("class", `buttonCharToMain`);
    buttonCharToMain.setAttribute("id", `buttonCharToMain`);
    buttonCharToMain.addEventListener("click", function (e) {
        var gameBox = document.getElementById("gameBox");
        gameBox.innerHTML = "";
        loadMainMenu();
    });
    buttonCharToMain.innerText = "Back";
    charBox.appendChild(buttonCharToMain);
}

function dropdown() {
    var dropdownButton = document.createElement("button");
    dropdownButton.setAttribute("class", `dropdownButtonChar`);
    dropdownButton.setAttribute("id", `dropdownButtonChar`);
    dropdownButton.setAttribute("open", `false`);
    dropdownButton.innerText = "Category";
    dropdownButton.addEventListener("click", function (e) {
        if (e.target.getAttribute("open") == "true") {
            var dropdownList = document.getElementById("dropdownListChar");
            dropdownButton.setAttribute("open", `false`);
            dropdownList.innerHTML = "";
            charBox.removeChild(dropdownList);
            return;
        }
        e.target.setAttribute("open", `true`);
        var dropdownList = document.createElement("div");
        dropdownList.setAttribute("class", `dropdownListChar`);
        dropdownList.setAttribute("id", `dropdownListChar`);
        charBox.appendChild(dropdownList);
        for (var i in charList) {
            var dropdownOption = document.createElement("button");
            dropdownOption.setAttribute("class", `optionCategoryChar`);
            dropdownOption.setAttribute("id", `optionCategoryChar`);
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
    charBox.appendChild(dropdownButton);
}

function scroll() {
    var scrollChar = document.createElement("div");
    scrollChar.setAttribute("class", `scrollChar`);
    scrollChar.setAttribute("id", `scrollChar`);
    charBox.appendChild(scrollChar);
    scrollFill("All");
}

function scrollFill(category) {
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
}

function scrollSearch(filter) {
    var scrollChar = document.getElementById("scrollChar");
    scrollChar.innerHTML = "";
    if (selectedCategory == 0) {
        for (var i in charList) {
            for (var j in charList[i].chars) {
                if ((charList[i].chars[j].title.toUpperCase()).includes(filter)) {
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
        }
        scrollChar.lastChild.style.marginRight = "0px";
    }
    else {
        for (var i in charList[selectedCategory].chars) {
            if ((charList[selectedCategory].chars[i].title.toUpperCase()).includes(filter)) {
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
    }
}

export { loadCharsMenu };