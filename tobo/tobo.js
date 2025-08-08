document.body.addEventListener("click", function (evt) {
    var sound = document.getElementById("music");
    sound.currentTime = 0;
    sound.play();
});