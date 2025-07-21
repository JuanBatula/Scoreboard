let homeEl = document.getElementById("home-score-btn")
let guestEl = document.getElementById("guest-score-btn")
let homeScore = 0
let guestScore = 0


function homePlusOne() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function homePlusTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function guestPlusOne() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function guestPlusTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function guestPlusThree() {
    guestScore += 3
    guestEl.textContent = guestScore
}

function newGame() {
    guestScore = 0
    homeScore = 0
    guestEl.textContent = guestScore
    homeEl.textContent = homeScore
}

