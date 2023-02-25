let loader = document.querySelector(".loader")
let loaderVisibility = document.getElementsByClassName("loaderVisibility");
window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
    for (let i = 0; i < loaderVisibility.length; i++) {
        loaderVisibility[i].classList.add("noLoaderVisibility");
    }
}
/* ==================================================
                  Burger Menu
================================================== */

let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")

menu.addEventListener('click', () => {
    navList.classList.toggle('opacity-mob-nav');
    navbar.classList.toggle('height-mob-nav');
    line1.classList.toggle("line-1");
    line2.classList.toggle("line-2");
    line3.classList.toggle("line-3");
});

/* ==================================================
                  Typewriter Effect
================================================== */

var typed = new Typed('.typer', {
    strings: [
        "Web System and Technologies",
        "Activity #3 and #4",
        "CSS3 Robot Web Art",
        "Namias, Jhon Keneth Ryan B."
    ],
    typeSpeed: 30,
    backSpeed: 15,
    loop: true,
    backDelay: 1200
});

/* ==================================================
                    Form Validation
================================================== */

function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    var email = document.forms['myForm']["femail"].value;
    var message = document.forms['myForm']["fmessage"].value;

    var lettersregex = /^[a-zA-Z ]*$/;
    var mailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (name.replace(/\s/g, "").length <= 0) {
        seterror("name", "*No whitespaces allowed !");
        returnval = false;
    } else if (name.length <= 2) {
        seterror("name", "*Name is too short !");
        returnval = false;
    } else if (name.length > 30) {
        seterror("name", "*Name should be less than 30 characters !");
        returnval = false;
    } else if (!name.match(lettersregex)) {
        seterror("name", "*Name can contain only alphabets !");
        returnval = false;
    }

    if (email.length > 40) {
        seterror("email", "*Email should be less than 40 characters !");
        returnval = false;
    } else if (!email.match(mailregex)) {
        seterror("email", "*Please enter valid Email !");
        returnval = false;
    }

    if (message.replace(/\s/g, "").length <= 0) {
        seterror("message", "*No whitespaces allowed !");
        returnval = false;
    } else if (message.length > 200) {
        seterror("message", "*Please write a short message(Max 200 Characters) !");
        returnval = false;
    }

    return returnval;
}