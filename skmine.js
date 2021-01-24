let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let reset = document.querySelector('#reset');

let scoreP1 = document.querySelector("#scoreP1");
let scoreP2 = document.querySelector("#scoreP2");

let p1Score = 0;
let p2Score = 0;
let winningScore = document.querySelector('#maxScore').value;

let maxScore = document.querySelector('#maxScore');
maxScore.addEventListener('click', function () {
    winningScore = document.querySelector('#maxScore').value;
    restart();
});

let disable = function (flag) {
    if (flag === 1) {
        player1.disabled = true;
        player2.disabled = true;
        player1.classList.add('disable');
        player2.classList.add('disable');
    }
    else {
        player1.disabled = false;
        player2.disabled = false;
        player1.classList.remove('disable');
        player2.classList.remove('disable');
    }
}

let restart = function () {
    p1Score = 0;
    p2Score = 0;
    scoreP1.innerHTML = p1Score;
    scoreP2.innerHTML = p2Score;
    scoreP1.style.color = 'black';
    scoreP2.style.color = 'black';
    disable(0);
}

let winCheck = function (player) {
    disable(1);
    if (player === 0) {
        scoreP1.style.color = 'green';
        scoreP2.style.color = 'red';
    }
    else {
        scoreP2.style.color = 'green';
        scoreP1.style.color = 'red';
    }
}

player1.addEventListener('click', function () {
    if (p1Score + 1 !== parseInt(winningScore)) {
        p1Score += 1;
        scoreP1.innerHTML = p1Score;
    }
    else {
        p1Score += 1;
        scoreP1.innerHTML = p1Score;
        winCheck(0);
    }
});
player2.addEventListener('click', function () {
    if (p2Score + 1 !== parseInt(winningScore)) {
        p2Score += 1;
        scoreP2.innerHTML = p2Score;
    }
    else {
        p2Score += 1;
        scoreP2.innerHTML = p2Score;
        winCheck(1);
    }
});
reset.addEventListener('click', function () {
    restart();
})

