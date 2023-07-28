window.onload = function () {
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var representTens = document.getElementById("tens");
    var representSeconds = document.getElementById("seconds");
    var representMinutes = document.getElementById("minutes");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.addEventListener('click', ()=> {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);

    })
    buttonStop.addEventListener('click', ()=>{
        clearInterval(Interval);
    })

    buttonReset.addEventListener('click', ()=>{
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        representTens.innerHTML = tens;
        representSeconds.innerHTML = seconds;
        representMinutes.innerHTML = minutes;
    })

    function startTimer() {
        tens++;

        if (tens <= 9) {
            representTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            representTens.innerHTML = tens;

        }

        if (tens >= 60) {
            console.log("seconds");
            seconds++;
            representSeconds.innerHTML = "0" + seconds;
            tens = 0;
            representTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            representSeconds.innerHTML = seconds;
        }

        if (seconds >= 60){
            console.log("minutes");
            minutes++;
            representMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            representSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9){
            representMinutes.innerHTML = minutes;
        }

    }


}