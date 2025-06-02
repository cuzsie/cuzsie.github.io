const deltarune_release = new Date("2025-06-04T15:00:00Z").getTime();
// 2025-06-04T15:00:00Z

let time_info = {
    get distance() {return deltarune_release - new Date().getTime();},
    get days() {return Math.floor(time_info.distance / (1000 * 60 * 60 * 24));},
    get hours() {return Math.floor((time_info.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));},
    get minutes() {return Math.floor((time_info.distance % (1000 * 60 * 60)) / (1000 * 60));},
    get seconds() {return Math.floor((time_info.distance % (1000 * 60)) / 1000);},
    get has_passed() {return time_info.seconds < 0;},
    get is_today() {return time_info.is_tomorrow && time_info.hours < 8;},
    get is_tomorrow() {return time_info.days == 0;}
}

const text_typer = document.getElementById("type");
const timer_text = document.getElementById("timer-text");
const tomorrows_text = document.getElementById("tomorrows");
const days_text = document.getElementById("days");
const hours_text = document.getElementById("hours");
const mins_text = document.getElementById("minutes");
const secs_text = document.getElementById("seconds");
const disclaimer_text = document.getElementById("disclaimer");

function sequence() {
    setTimeout(do_textbox, 1000);

    setInterval(update_countdown, 1000);
    update_countdown();

    if (time_info.has_passed) {
        document.getElementsByClassName("true-timer")[0].innerHTML = "";
        tomorrows_text.textContent = "tommorows ago";
    }
}

function do_textbox() {
    let txt = `Chapter 3 + 4\n${time_info.has_passed ? ('released') : (time_info.is_tomorrow ? 'is' : 'is in')}`;
    let el = text_typer;
    let i = 0;

    function typeWriter() {
        const char = txt.charAt(i);
        el.innerHTML += (char === '\n' ? '<br>' : char);
        if (++i < txt.length) setTimeout(typeWriter, 50);
    }

    typeWriter();
}

function update_countdown() {
    console.log(`Updated time: ${time_info.days}:${time_info.hours}:${time_info.minutes}:${time_info.seconds}`);
    
    timer_text.textContent = String(Math.abs(time_info.days) + 1);

    if (time_info.has_passed) {
        return;
    }

    days_text.textContent = String(Math.abs(time_info.days)).padStart(2, '0');
    hours_text.textContent = String(Math.abs(time_info.hours)).padStart(2, '0');
    mins_text.textContent = String(Math.abs(time_info.minutes)).padStart(2, '0');
    secs_text.textContent = String(Math.abs(time_info.seconds)).padStart(2, '0');

    // Today and tomorrow text
    if (time_info.is_today) {
        timer_text.textContent = "Today";
        tomorrows_text.innerHTML = "";
    }
    else if (time_info.is_tomorrow) {
        timer_text.textContent = "Tomorrow";
        tomorrows_text.innerHTML = "";
    }
}

sequence();