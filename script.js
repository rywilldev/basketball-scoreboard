let homeScore = 0;
let guestScore = 0;
document.querySelector("#home-score-el").textContent = homeScore;
document.querySelector("#guest-score-el").textContent = guestScore;

function addHomeOne() {
    homeScore.textContent = homeScore += 1;
    document.querySelector("#home-score-el").textContent = homeScore;
    console.log(homeScore);
}

function addHomeTwo() {
    homeScore.textContent = homeScore += 2;
    document.querySelector("#home-score-el").textContent = homeScore;
    console.log(homeScore);
}

function addHomeThree() {
    homeScore.textContent = homeScore += 3;
}

function addGuestOne() {
    guestScore.textContent = guestScore += 1;
}

function addHomeTwo() {
    guestScore.textContent = guestScore += 2;
}

function addHomeThree() {
    guestScore.textContent = guestScore += 3;
}