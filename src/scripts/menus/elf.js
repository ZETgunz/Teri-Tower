import { loadMainMenu } from "./main.js";
import { elfList } from "../../res/data/elfList.js";

function loadElfMenu() {
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    var elfBox = document.createElement("div");
    elfBox.setAttribute("class", `elfBox`);
    elfBox.setAttribute("id", `elfBox`);
    gameBox.appendChild(elfBox);

    var searchBar = document.createElement("input");
    searchBar.setAttribute("class", `searchBar`);
    searchBar.setAttribute("id", `searchBar`);
    searchBar.setAttribute("type", `text`);
    searchBar.setAttribute("placeholder", `Search...`);
    searchBar.addEventListener("keyup", function (e) {
        var input = document.getElementById("searchBar").value;
        var filter = input.toUpperCase();
        if (input == "") {
            scrollFill();
        }
        else {
            scrollSearch(filter);
        }
    });
    elfBox.appendChild(searchBar);

    scroll();

    var buttonElfToMain = document.createElement("button");
    buttonElfToMain.setAttribute("class", `buttonElfToMain`);
    buttonElfToMain.setAttribute("id", `buttonElfToMain`);
    buttonElfToMain.addEventListener("click", back);
    buttonElfToMain.innerText = "Back";
    elfBox.appendChild(buttonElfToMain);
}

function scroll() {
    var scrollElf = document.createElement("div");
    scrollElf.setAttribute("class", `scrollElf`);
    scrollElf.setAttribute("id", `scrollElf`);
    elfBox.appendChild(scrollElf);
    scrollFill();
}

function scrollFill() {
    var scrollElf = document.getElementById("scrollElf");
    scrollElf.innerHTML = "";
    for (var i in elfList) {
        var optionElf = document.createElement("button");
        optionElf.setAttribute("class", `optionElf`);
        optionElf.setAttribute("id", `optionElf`);
        optionElf.setAttribute("Elf", `${elfList[i].title}`);
        optionElf.style.background = `url('./src/res/elf/${elfList[i].title}.png') no-repeat center center fixed`;
        optionElf.style.backgroundSize = "cover";
        optionElf.style.marginRight = "15px";
        scrollElf.appendChild(optionElf);
    }
    scrollElf.lastChild.style.marginRight = "0px";
}

function scrollSearch(filter) {
    var scrollElf = document.getElementById("scrollElf");
    scrollElf.innerHTML = "";
    for (var i in elfList) {
        if ((elfList[i].title.toUpperCase()).includes(filter)) {
            var optionElf = document.createElement("button");
            optionElf.setAttribute("class", `optionElf`);
            optionElf.setAttribute("id", `optionElf`);
            optionElf.setAttribute("Elf", `${elfList[i].title}`);
            optionElf.style.background = `url('./src/res/elf/${elfList[i].title}.png') no-repeat center center fixed`;
            optionElf.style.backgroundSize = "cover";
            optionElf.style.marginRight = "15px";
            scrollElf.appendChild(optionElf);
        }
    }
    scrollElf.lastChild.style.marginRight = "0px";
}

function back() {
    var gameBox = document.getElementById("gameBox");
    gameBox.innerHTML = "";
    loadMainMenu();
}

export { loadElfMenu };