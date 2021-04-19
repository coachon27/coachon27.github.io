const resetcolor = document.querySelector("#reset-container");
const redButton = document.querySelector("#red-button");
redButton.addEventListener("click", function () {
    resetcolor.className = "red";
})
const blueButton = document.querySelector("#blue-button");
blueButton.addEventListener("click", function () {
    resetcolor.className = "blue";
})
const goldButton = document.querySelector("#gold-button");
goldButton.addEventListener("click", function () {
    resetcolor.className = "gold";
})

let colorT1 = (prompt("Team 1 choose a color! Your choices are red, blue or gold! "));
const leftColor = document.querySelector('.left');
const nameT1 = document.querySelector('#name1');
let newname = (prompt("Choose a Name for your team! "));
nameT1.innerHTML = newname
    if (colorT1 === "blue") { 
        leftColor.style.backgroundColor = "lightblue";
    } else if (colorT1 === "red") { 
        leftColor.style.backgroundColor = "red";
    } else if (colorT1 === "gold") {
        leftColor.style.backgroundColor = "gold";
    }

let colorT2 = (prompt("Team 2 choose a color! Your choices are red, blue or gold! "));
const rightColor = document.querySelector('.right');
const nameT2 = document.querySelector('#name2');
let newname2 = (prompt("Choose a Name for your team! "));
nameT2.innerHTML = newname2
    if (colorT2 === "blue") { 
        rightColor.style.backgroundColor = "lightblue";
    } else if (colorT2 === "red") { 
        rightColor.style.backgroundColor = "red";
    } else if (colorT2 === "gold") {
        rightColor.style.backgroundColor = "gold";
    }

let shoot = 0
let audio = document.querySelector("#audio");
audio.controls = false;
let goals1 = 0;
let shots1 = 0;
const T1shoot = document.querySelector("#teamone-shoot-button");
const T1shots = document.querySelector("#teamone-numshots");
const T1goals = document.querySelector("#teamone-numgoals");

T1shoot.addEventListener("click", function () {
    shoot = Math.random();
        if (shoot>0.5) {
            goals1 += 1
            shots1 += 1;
            audio.play() 
            //alert("Nice Shot! You made it.")
        } else {
            //alert("Better luck next time! You missed.")}
            shots1 += 1;
        }
    T1shots.innerHTML = shots1;
    T1goals.innerHTML = goals1;
})

let goals2 = 0;
let shots2 = 0;
const T2shoot = document.querySelector("#teamtwo-shoot-button");
const T2shots = document.querySelector("#teamtwo-numshots");
const T2goals = document.querySelector("#teamtwo-numgoals");

T2shoot.addEventListener("click", function () {
  // function to add 1 to COUNT & update value of countspan inner.html 
    shoot = Math.random();
        if (shoot>0.5) {
            goals2 += 1;
            shots2 += 1;
            audio.play();
            //alert("Nice Shot! You made it.")
        } else {
            //alert("Better luck next time! You missed.")}
            shots2 += 1;
        }
    T2shots.innerHTML = shots2;
    T2goals.innerHTML = goals2;
})
   //console.log(goals2 + newname2)
let reset = 0
const resetcontainer = document.querySelector("#reset-container");
const resetbutton = document.querySelector("#reset-button");
const resetnum = document.querySelector("#num-resets");

resetbutton.addEventListener("click", function () {
    if (goals1 > goals2) {
        alert("Nice Game " + newname + "! You WON by a score of " + goals1 + 
        " to " + goals2 + "!")
    } else if (goals1 < goals2) {
        alert("Amazing job " + newname2 + "! You WON by a score of " + goals2 + 
        " to " + goals1 + "!")
    } else {
        alert("This game ended in a tie! PLAY AGAIN!")
    }
reset += 1;
resetnum.innerHTML = reset;
goals2 = 0;
shots2 = 0;
goals1 = 0;
shots1 = 0;
T2shots.innerHTML = shots2;
T2goals.innerHTML = goals2;
T1shots.innerHTML = shots1;
T1goals.innerHTML = goals1;
})
