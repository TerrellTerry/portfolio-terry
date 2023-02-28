
const introPageDiv = document.getElementById("introPageDiv");
const introPageText = document.getElementById("introPageText");

const softwareButton = document.getElementById("softwares-button");
const gameButton = document.getElementById("games-button");

const chooseAdventureDiv = document.getElementById("chooseAdventure")

let clickedButton = false;


document.addEventListener("click", event =>{
    const element = event.target;
    if(!clickedButton){
        if(element.id == "softwares-button"){
            console.log("Clicked software button.");
            clickedButton = true;
            fadeOut(gameButton, 0.1);
            setTimeout(fadeOut, 1000, chooseAdventureDiv, 0.1);
            setTimeout(bodyOverflow, 1000);
        }
        if(element.id == "games-button"){
            console.log("Clicked games button.");
            clickedButton = true;
            fadeOut(softwareButton, 0.1);
            //This is where we set up the rest of the logic needed to show the information about software/games
            setTimeout(fadeOut, 1000, chooseAdventureDiv, 0.1);
            setTimeout(bodyOverflow, 1000);
        }
    }
});

function bodyOverflow(){
    document.body.style.overflow = 'visible';
}

function fadeOut(element, steps) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * steps;
    }, 50);
}

function fadeIn(element, steps) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * steps;
    }, 10);
}

function loadedPage(){
    fadeIn(introPageText, 0.03);
    setTimeout(fadeOut, 3000, introPageDiv, 0.1);
}

loadedPage();