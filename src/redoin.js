class BeatSystem {
    constructor(bpm, onBeat, onStep) {
        this.bpm = bpm;
        this.onBeat = onBeat;
        this.onStep = onStep;

        this.secondsPerBeat = 60 / bpm;
        this.secondsPerStep = this.secondsPerBeat / 4;

        this.lastBeat = -1;
        this.lastStep = -1;
    }

    update(audioTime) {
        const step = Math.floor(audioTime / this.secondsPerStep);
        const beat = Math.floor(audioTime / this.secondsPerBeat);

        if (step !== this.lastStep) {
            this.lastStep = step;

            if (this.onStep) 
                this.onStep(step + 1);
        }

        if (beat !== this.lastBeat) {
            this.lastBeat = beat;

            if (this.onBeat) 
                this.onBeat(beat + 1);
        }
    }
}

class PopupWindow {
    constructor(url, name, width = 300, height = 250) {
        this.url = url;
        this.name = name;

        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;

        this.win = null;
        this.hidden = false;

        this.circular = false;
        this.radius = 100;
        this.speed = 2.0;
        this.angle = 0;
        this.lastTime = 0;

        this.motionFrame = null;
    }

    open(x = 100, y = 100) {
        if (this.win && !this.win.closed) {
            this.win.focus();
            return;
        }

        this.win = window.open(
            this.url,
            this.name,
            `width=${this.width},height=${this.height},left=${x},top=${y}`
        );

        this.win.resizeTo(this.width, this.height + 70);
        this.win.moveTo(x, y);

        this.x = x;
        this.y = y;
        this.hidden = false;
    }

    close() {
        if (this.win && !this.win.closed)
            this.win.close();

        this.win = null;
        this.stopCircular();
    }

    focus() {
        if (this.win && !this.win.closed)
            this.win.focus();
    }

    moveTo(x, y) {
        if (this.win && !this.win.closed && !this.hidden) {
            this.win.moveTo(x, y);
            this.x = x;
            this.y = y;
        }
    }

    hide() {
        if (this.win && !this.win.closed) {
            this.win.resizeTo(-500, -500);
            this.win.moveTo(-99999, -99999);
            this.hidden = true;
        }
    }

    show(x = 100, y = 100, width = this.width, height = this.height) {
        if (this.win && !this.win.closed) {
            this.win.resizeTo(width, height + 70);
            this.win.moveTo(x, y);
            this.x = x;
            this.y = y;
            this.hidden = false;
        }
    }

    tweenTo(targetX, targetY, duration = 1000, easing = 'easeOutQuad') {
        if (!this.win || this.win.closed || this.hidden) return;

        const screenX = this.win.screenX;
        const screenY = this.win.screenY;
        const deltaX = targetX - screenX;
        const deltaY = targetY - screenY;
        const startTime = performance.now();

        const easings = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => t * (2 - t),
            easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            easeOutCubic: t => (--t) * t * t + 1
        };
        const easeFunc = easings[easing] || easings.linear;

        const animate = (time) => {
            if (!this.win || this.win.closed) return;

            const elapsed = (time - startTime) / duration;
            const progress = Math.min(1, elapsed);
            const eased = easeFunc(progress);

            const newX = screenX + deltaX * eased;
            const newY = screenY + deltaY * eased;

            this.win.moveTo(Math.round(newX), Math.round(newY));

            this.x = newX;
            this.y = newY;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    startCircular(radius = 100, speed = 2.0) {
        if (this.circular) return;

        this.circular = true;
        this.radius = radius;
        this.speed = speed;
        this.angle = 0;
        this.centerX = this.x;
        this.centerY = this.y;
        this.lastTime = performance.now();

        const loop = (time) => {
            if (!this.circular || !this.win || this.win.closed || this.hidden) return;

            const dt = (time - this.lastTime) / 1000; // seconds
            this.lastTime = time;

            this.angle += this.speed * dt;

            const x = this.centerX + this.radius * Math.cos(this.angle);
            const y = this.centerY + this.radius * Math.sin(this.angle);

            this.moveTo(Math.round(x), Math.round(y));
            this.motionFrame = requestAnimationFrame(loop);
        };

        this.motionFrame = requestAnimationFrame(loop);
    }

    stopCircular() {
        this.circular = false;

        if (this.motionFrame) {
            cancelAnimationFrame(this.motionFrame);
            this.motionFrame = null;
        }
    }

    toggleCircular(radius = 100, speed = 2.0) {
        if (this.circular)
            this.stopCircular();
        else
            this.startCircular(radius, speed);
    }
}

const startButton = document.getElementById("start-button");
const spaceImg = document.getElementById("space");

const SCREEN_W = window.screen.width;
const SCREEN_H = window.screen.height;

const song = new Audio("/assets/audio/redoin/ReDoin.ogg");
let started = false;
let time = 0;

const metronome = new Audio("/assets/audio/redoin/metronome.ogg");

let beat = 0;
let step = 0;

/*
    WINDOWS
*/
const win_hh = new PopupWindow("hh.html", "HH", 800, 450);
let win_hhgregg = new PopupWindow("https://hhgregg.com", "", 300, 250);
const win_panasonic = new PopupWindow("panasonic.html", "PANASONIC BLURAY", 300, 250);
const win_lcd = new PopupWindow("lcdtv.html", "", 300, 250);

const beatSystem = new BeatSystem(
    178, 
    (beat) => beatHit(beat),
    (step) => stepHit(step)
);

function init() {
    requestAnimationFrame(mainLoop);

    win_hh.open((SCREEN_W / 2) - 400, (SCREEN_H / 2) - 225);
    win_hh.focus();

    win_panasonic.open();
    win_panasonic.hide();

    win_lcd.open();
    win_lcd.hide();

    window.addEventListener('beforeunload', function (e) {
        win_hh.close();
        if (win_hhgregg != window) win_hhgregg.close();;
        win_panasonic.close();
        win_lcd.close();
    });

    startButton.remove();
    setTimeout(start, 1000);
}

function start() {
    console.log("Funny started");

    win_hh.win.document.getElementById("hh").style.opacity = 1;

    song.play();
    started = true;
}

function changeTitle(title) {
    document.title = title;
    //history.replaceState({ page: 'updated-page' }, "", url);
}

const debugText = document.getElementById("debug");

function mainLoop(timestamp) {
    //console.log("udpate");
    debugText.textContent = `BEAT: ${beat}\nSTEP: ${step}`;
    
    if (!started) {
        requestAnimationFrame(mainLoop);
        return;
    }

    beatSystem.update(song.currentTime);

    requestAnimationFrame(mainLoop);
}

function beatHit(nextBeat) {
    //console.log(`beat ${beat}`);  
    beat = nextBeat;
    //metronome.play(); 
}

let doHhLoop = false;
let hhLoopStep = 0;
function getHhWinPos(offset) {return (SCREEN_W - offset)}

function stepHit(nextStep) {
    //console.log(`step ${step}`);
    step = nextStep;

    switch (step) {
        case 10:
            hhLoop(step);
            break;
        case 128:
            win_hh.tweenTo(win_hh.win.screenX - 400, win_hh.win.screenY, 7000, 'easeOutQuad');
            spaceImg.style.opacity = 1;
            break;
        case 256:
            win_hh.startCircular(25, 0.7);
            break;
        case 384: case 512:
            hhLoop(step);
            break;
    }

    if (!doHhLoop) 
        return;
    
    switch (step - hhLoopStep) {
        // HHHGREGG
        case 0:
            if (win_hhgregg != window)
                win_hhgregg.close();

            win_hhgregg.open(getHhWinPos(900), 150);
            changeTitle("HHHGREGG");
            break;
        // PANASONIC BLURAY
        case 12:
            win_panasonic.show(getHhWinPos(600), 150);
            win_panasonic.win.document.getElementById("content").hidden = false;
            setTimeout(function() {win_panasonic.startCircular(15, 1.0)}, 50);
            changeTitle("PANASONIC BLURAY");
            break;
        // 99 DOLLARS
        case 24:
            win_panasonic.win.document.getElementById("t2").hidden = false;
            changeTitle("99$");
            break;
        case 48:
            win_lcd.show(getHhWinPos(300), 150);
            win_lcd.win.document.getElementById("content").hidden = false;
            win_lcd.win.document.getElementById("txt").start();
            setTimeout(function() {win_lcd.startCircular(15, 1.0)}, 50);
            break;
        case 56:
            win_lcd.win.document.getElementById("image").src = "/assets/images/redoin/lcd_1.png";
            break;
        case 62:
            win_lcd.win.document.getElementById("image").src = "/assets/images/redoin/lcd.png";
            break;
        // RESET
        case 126:
            resetHhLoop();
            break;
    }
}

function hhLoop(step) {
    hhLoopStep = step;
    doHhLoop = true;
}

function resetHhLoop() {
    changeTitle("...");

    win_hhgregg.close();

    win_panasonic.hide();
    win_panasonic.win.document.getElementById("t2").hidden = true;
    win_panasonic.win.document.getElementById("content").hidden = true;
    win_panasonic.stopCircular();

    win_lcd.hide();
    win_lcd.win.document.getElementById("image").src = "/assets/images/redoin/lcd_0.png";
    win_lcd.win.document.getElementById("content").hidden = true;
    win_lcd.stopCircular();
}