var s = 0, m = 0, h = 0;
var timer;
var previousLapTime = "";

var displaymiliseconds = document.getElementById("miliseconds");
var displayseconds = document.getElementById("seconds");
var displayminutes = document.getElementById("minutes");
var laps = document.querySelector(".laps");

function start() {
    if (!timer) {
        timer = setInterval(run, 10); 
    }
}

function run() {
    s++;
    if (s == 60) {
        s = 0;
        m++;
        if (m == 60) {
            m = 0;
            h++;
        }
    }
    displaymiliseconds.innerText = s < 10 ? "0" + s : s;
    displayseconds.innerText = m < 10 ? "0" + m : m;
    displayminutes.innerText = h < 10 ? "0" + h : h;
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function reset() {
    stopTimer();
    s = 0;
    m = 0;
    h = 0;
    displaymiliseconds.innerText = "00";
    displayseconds.innerText = "00";
    displayminutes.innerText = "00";
    laps.innerHTML = "";
    previousLapTime = ""; // Reset previous lap time
}



function lap() {
    var lapTime =
        (h < 10 ? "0" + h : h) +
        " : " +
        (m < 10 ? "0" + m : m) +
        " : " +
        (s < 10 ? "0" + s : s);

    // Check if the lap time is different from the previous lap time
    if (lapTime !== previousLapTime) {
        var li = document.createElement("li");
        li.innerText = lapTime;
        laps.appendChild(li);
        previousLapTime = lapTime; // Update previous lap time
    }
}

function resetLap() {
    laps.innerHTML = "";
    previousLapTime = ""; // Reset previous lap time
}

document.getElementById("startTimer").addEventListener("click", start);
document.getElementById("pauseTimer").addEventListener("click", pause);
document.getElementById("resetTime").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
document.getElementById("resetLap").addEventListener("click", resetLap);
