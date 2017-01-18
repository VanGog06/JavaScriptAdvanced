function timer() {
    let hours = $('#hours').text();
    let minutes = $('#minutes').text();
    let seconds = $('#seconds').text();

    let timer;

    $('#start-timer').click(function() {
        if (!timer) timer = setInterval(step, 1000);
    });

    $('#stop-timer').click(function() {
        clearInterval(timer);
        timer = false;
    });

    function step() {
        seconds++;

        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }

        seconds = addLeadingZero(seconds);
        minutes = addLeadingZero(minutes);
        hours = addLeadingZero(hours);

        $('#seconds').text(seconds);
        $('#minutes').text(minutes);
        $('#hours').text(hours);
    }

    function addLeadingZero(value) {
        value = Number(value);

        if (value >= 0 && value <= 9) value = '0' + value;

        return value;
    }
}