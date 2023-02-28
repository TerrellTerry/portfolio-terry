
const introPageDiv = document.getElementById("introPageDiv");
const introPageText = document.getElementById("introPageText");

const softwareButton = document.getElementById("softwares-button");
const gameButton = document.getElementById("games-button");

const softwareProjects = document.getElementsByClassName("software-box");
const gameProjects = document.getElementsByClassName("game-box");

const chooseAdventureDiv = document.getElementById("chooseAdventure")

const buttonHolder = document.getElementById("button-holder")

let clickedButton = false;


document.addEventListener("click", event =>{
    const element = event.target;
    if(!clickedButton){
        if(element.id == "softwares-button"){
            console.log("Clicked software button.");
            clickedButton = true;
            fadeOut(gameButton, 0.1, 0);
            for(item of gameProjects){
                item.style.display = 'none';
            }
            setTimeout(fadeOut, 1000, chooseAdventureDiv, 0.1, 0);
            setTimeout(bodyOverflow, 1000);
        }
        if(element.id == "games-button" || element.id == "games-icon"){
            console.log("Clicked games button.");
            clickedButton = true;
            fadeOut(softwareButton, 0.1, 1000);
            for(item of softwareProjects){
                item.style.display = 'none';
            }
            //This is where we set up the rest of the logic needed to show the information about software/games
            setTimeout(fadeOut, 1000, chooseAdventureDiv, 0.1, 0);
            setTimeout(bodyOverflow, 1000);
        }
    }

    if(element.id == "nav-work-button"){
        resetAdventure(0.1);
    }
});

function resetAdventure(steps){
    clickedButton = false;
    fadeIn(chooseAdventureDiv, steps);
    fadeIn(gameButton, steps);
    fadeIn(softwareButton, steps);
    setTimeout(makeProjectsVisible, 500);
}
function makeProjectsVisible(){
    for(item of gameProjects){
        item.style.display = 'inline';
    }
    for(item of softwareProjects){
        item.style.display = 'inline';
    }
}

function bodyOverflow(){
    document.body.style.overflow = 'visible';
}

function fadeOut(element, steps, setNoneWaitTime) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            setTimeout(setElementDisplayNone, setNoneWaitTime, element);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * steps;
    }, 50);
}

function setElementDisplayNone(element){
    element.style.display = 'none';
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
    setTimeout(fadeOut, 3000, introPageDiv, 0.1, 0);
}

loadedPage();