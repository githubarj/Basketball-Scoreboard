let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore =0;

//adding scores for the home side
function homeAddOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}
function homeAddTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function homeAddThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

//for the guest side
function guestAddOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestSomeScore;
}
function guestAddTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function guestAddThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
