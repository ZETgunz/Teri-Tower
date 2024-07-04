import { users } from "../users/login.js";
import { getUser } from "./util.js";
import { loadGame } from "./load.js";

function loginForm() {
    var gameBox = document.getElementById("gameBox");
    var loginBox = document.createElement("div");
    loginBox.setAttribute("class", `loginBox`);
    loginBox.setAttribute("id", `loginBox`);

    var prompt = document.createElement("p");
    prompt.setAttribute("class", "loginPrompt");
    prompt.setAttribute("id", "loginPrompt");
    prompt.innerText = "Teri Tower reception";
    loginBox.appendChild(prompt);

    var form = document.createElement("form");
    form.setAttribute("action", ``);
    form.setAttribute("method", `post`);
    loginBox.appendChild(form);

    var nameLabel = document.createElement("label");
    nameLabel.innerText = `Teririan Name`;
    nameLabel.setAttribute("class", `formNameLabel`);
    nameLabel.setAttribute("id", `formNameLabel`);
    var nameInput = document.createElement("input");
    nameInput.setAttribute("class", `formNameInput`);
    nameInput.setAttribute("id", `formNameInput`);
    nameInput.setAttribute("type", `text`);
    nameInput.setAttribute("name", `name`);
    nameInput.setAttribute("required", ``);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    var passLabel = document.createElement("label");
    passLabel.innerText = `Passuwordo`;

    passLabel.setAttribute("class", `formPassLabel`);
    passLabel.setAttribute("id", `formPassLabel`);
    var passInput = document.createElement("input");
    passInput.setAttribute("class", `formPassInput`);
    passInput.setAttribute("id", `formPassInput`);
    passInput.setAttribute("type", `password`);
    passInput.setAttribute("name", `pass`);
    passInput.setAttribute("required", ``);
    form.appendChild(passLabel);
    form.appendChild(passInput);

    var submitButton = document.createElement("input");
    submitButton.setAttribute("class", `formSubmit`);
    submitButton.setAttribute("id", `formSubmit`);
    submitButton.setAttribute("type", `submit`);
    submitButton.setAttribute("name", `submit`);
    submitButton.setAttribute("value", `Enter`);
    submitButton.addEventListener("click", validate, true);
    form.appendChild(submitButton);

    loginBox.appendChild(form);

    gameBox.appendChild(loginBox);
}

function validate(click) {
    var name = document.getElementById("formNameInput").value;
    var pass = document.getElementById("formPassInput").value;
    console.log(name);
    var user = getUser(name);
    if (user != undefined) {
        if (users[user].pass == pass) {
            var gameBox = document.getElementById(`gameBox`);
            gameBox.innerHTML = "";
            click.preventDefault();
            loadGame(user);
        }
        else { 
            click.preventDefault(); 
            alert("Incorrect passuwordo!");
        }
    }
    else { 
        click.preventDefault() 
        alert("No such Teririan found!");
    };
}

export { loginForm }