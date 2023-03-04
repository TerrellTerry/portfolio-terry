
const introPageDiv = document.getElementById("introPageDiv");
const introPageText = document.getElementById("introPageText");

const softwareButton = document.getElementById("softwares-button");
const gameButton = document.getElementById("games-button");

const softwareProjects = document.getElementsByClassName("software-box");
const gameProjects = document.getElementsByClassName("game-box");

const chooseAdventureDiv = document.getElementById("chooseAdventure");

const buttonHolder = document.getElementById("button-holder");

const resume = document.getElementById("resume");
const myJourneyText = document.getElementById("my-journey");

const defaultInfo = document.getElementById("default");

const myTitle = document.getElementById("my-title");

let currInfo = document.getElementById("default");

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
            resume.setAttribute('href','Files/Terrell Terry Resume Software.pdf');
            myJourneyText.innerHTML = 'My<FONT COLOR="#2d6adb">  Software  </FONT>Journey';
            myTitle.innerText = 'Software Developer';
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
            myJourneyText.innerHTML = 'My<FONT COLOR="#fcca64">  Games  </FONT>Journey';
            resume.setAttribute('href','/Files/Terrell Terry Resume Games.pdf');
            myTitle.innerText = 'Game Developer';
            //This is where we set up the rest of the logic needed to show the information about software/games
            setTimeout(fadeOut, 1000, chooseAdventureDiv, 0.1, 0);
            setTimeout(bodyOverflow, 1000);
        }
    }

    if(element.id == "nav-work-button"){
        resetAdventure(0.1);
    }
});

let clickedProject = false;
function setNewInfo(name, projectNum){
    let projectInfo = document.getElementById(name+'-project-'+projectNum);
    if(currInfo.id == projectInfo.id)
    {
        return;
    }
    fadeOut(currInfo, 0.5, 0);
    setPrevInfo(projectInfo);
    // setTimeout(setPrevInfo, 1500, projectInfo);
    setTimeout(fadeIn, 500, projectInfo, 0.5);
}

function setPrevInfo(element){
    currInfo = element;
}

function resetAdventure(steps){
    clickedButton = false;
    fadeIn(chooseAdventureDiv, steps);
    fadeIn(gameButton, steps);
    fadeIn(softwareButton, steps);
    setTimeout(makeProjectsVisible, 500);
    setTimeout(makeDefaultInfo, 500);
}

function makeDefaultInfo(){
    currInfo.style.display = 'none';
    currInfo = defaultInfo;
    defaultInfo.style.display = 'inline';
    defaultInfo.style.opacity = 1;
    defaultInfo.style.paddingLeft = '2em';
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

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
  };

const faders = document.querySelectorAll(".fade-in");

// Thank you Kevin Powell! https://www.youtube.com/watch?v=huVJW23JHKQ
const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll){
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions
);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
})
