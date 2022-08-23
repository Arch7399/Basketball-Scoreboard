let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let homeS = 0;
let guestS = 0;
function h1() {
  homeS++;
  homeScore.innerText = homeS; 
}
function h2() {
  homeS += 2;
  homeScore.innerText = homeS; 
}
function h3() {
  homeS += 3;
  homeScore.innerText = homeS; 
}

function g1() {
  guestS++;
  guestScore.innerText = guestS; 
}
function g2() {
  guestS += 2;
  guestScore.innerText = guestS; 
}
function g3() {
  guestS += 3;
  guestScore.innerText = guestS; 
}

function reset(){
  homeS = 0;
  guestS = 0;
  homeScore.innerText = homeS;
  guestScore.innerText = guestS; 
}