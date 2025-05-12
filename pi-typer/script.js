Decimal.set({ precision: 1100 });

const PI = computePI(1000);
let curDig = 0;
let loss = false;
let canRetry = false;

let score = 0;

const textArea = document.getElementById("pi");
const scoreText = document.getElementById("score");
const results = document.getElementById("death_results");
const winScore = document.getElementById("win-score");
const highScoreText = document.getElementById("highscore");

let HIGH_SCORE = parseInt(localStorage.getItem("highScore") == "" ? 0 : localStorage.getItem("highScore"));

const initScorecolor = scoreText.style.color;

let skipBind = [
    "Enter",
    " "
];

updateScoreText();

function keyPressed(event) {
    if (loss)
    {
        if (canRetry && skipBind.includes(event.key))
            reset();

        return;
    }

    const key = event.key;
    const digit = curDig + 2;

    if (isNaN(key) || key == " ")
        return;
    
    if (key != PI[digit])
    {
        lost(key, digit);
        return;
    }

    score++;
    scoreText.innerHTML = `Score: ${score}`;
    textArea.innerHTML += PI[digit];
    curDig++;
}

document.addEventListener('keydown', keyPressed);

function lost(missed, digit) {
    loss = true;

    saveScore();

    textArea.innerHTML += missed;
    textArea.style.color = 'red';
    
    setTimeout(function() {
        textArea.innerHTML = textArea.innerHTML.substring(0, textArea.innerHTML.length - 1);
        textArea.innerHTML += PI[digit];
        
        winScore.innerHTML = scoreText.innerHTML;
        winScore.hidden = false;

        scoreText.innerHTML = "You Lost!";
        scoreText.style.color = 'red';        

        results.innerHTML = results.innerHTML = `You typed ${missed}, the correct digit was ${PI[digit]}<br>Press Enter to try again!`;

        canRetry = true;
    }, 750);
}

function saveScore() {
    if (isNaN(HIGH_SCORE) || score > HIGH_SCORE) {
        setScore(score);
        updateScoreText();
    }
}

function setScore(score) {
    HIGH_SCORE = score;
    localStorage.setItem("highScore", score);
}

function updateScoreText() {
    highScoreText.innerHTML = `High Score: ${isNaN(HIGH_SCORE) ? "0" : HIGH_SCORE.toString()}`;
}

function reset() {
    loss = false;
    canRetry = false;
    curDig = 0;
    score = 0;

    winScore.hidden = true;

    textArea.innerHTML = "3.";
    textArea.style.color = 'white';

    scoreText.innerHTML = "Score: 0";
    scoreText.style.color = initScorecolor;

    results.innerHTML = "----";
}

function factorial(n) {
    let result = new Decimal(1);

    for (let i = 2; i <= n; i++) {
        result = result.mul(i);
    }

    return result;
}

function computePI(digits) {
    const C = new Decimal(426880).mul(Decimal.sqrt(10005));
    let sum = new Decimal(0);

    const terms = Math.ceil(digits / 14.181647462725477); 

    for (let k = 0; k < terms; k++) {
        const num = factorial(6 * k).mul(new Decimal(545140134).mul(k).add(13591409));
        const den = factorial(3 * k).mul(factorial(k).pow(3)).mul(new Decimal(-262537412640768000).pow(k));
        sum = sum.add(num.div(den));
    }

    return C.div(sum).toFixed(digits);
}