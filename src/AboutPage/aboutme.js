function bodyOverflow(){
    document.body.style.overflow = 'visible';
}

bodyOverflow();

const skillTypeSoftware = document.getElementById('skill-type-software');
const skillTypeGames = document.getElementById('skill-type-games');

const gameSkills = document.getElementById('game-skills');
const softwareSkills = document.getElementById('software-skills');

let currSkills = document.getElementById('software-skills');
let currSkillType = document.getElementById('skill-type-software');

document.addEventListener('click', event => {
  const element = event.target;
    if(element.id == "button"){
      //If we're viewing the game skills, show software skills
      if(currSkills.id == gameSkills.id){
        fadeOutType(currSkillType, skillTypeSoftware, 0.5)
        fadeOut(currSkills, softwareSkills, 0.5);
      }
      else{
        fadeOutType(currSkillType, skillTypeGames, 0.5)
        fadeOut(currSkills, gameSkills, 0.5);
      }

      // console.log("Clicked button");
      // text.classList.add('slide'); // add the "slide" class to the text element
      // setTimeout(() => {
      //   text.style.display = 'none'; // hide the text element after the transition
      // }, 500); // set timeout to match the transition duration
    }

});

function fadeOutType(element, nextElement, steps) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
          fadeIn(nextElement, 0.1)
          currSkillType = nextElement;
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * steps;
  }, 50);

  
}

function fadeOut(element, nextElement, steps) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
          fadeIn(nextElement, 0.1)
          currSkills = nextElement;
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