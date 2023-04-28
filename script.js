let homeScore = 0;
let guestScore = 0;
document.querySelector("#home-score-el").textContent = homeScore;
document.querySelector("#guest-score-el").textContent = guestScore;

function addHomeOne() {
    homeScore.textContent = homeScore += 1;
    document.querySelector("#home-score-el").textContent = homeScore;
}

function addHomeTwo() {
    homeScore.textContent = homeScore += 2;
    document.querySelector("#home-score-el").textContent = homeScore;
}

function addHomeThree() {
    homeScore.textContent = homeScore += 3;
    document.querySelector("#home-score-el").textContent = homeScore;
}

function addGuestOne() {
    guestScore.textContent = guestScore += 1;
    document.querySelector("#guest-score-el").textContent = guestScore;
}

function addGuestTwo() {
    guestScore.textContent = guestScore += 2;
    document.querySelector("#guest-score-el").textContent = guestScore;
}

function addGuestThree() {
    guestScore.textContent = guestScore += 3;
    document.querySelector("#guest-score-el").textContent = guestScore;
}