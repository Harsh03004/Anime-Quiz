var skip = document.getElementById('skip');
var score = document.querySelector('.score'); // Updated selector
var totalScore = document.querySelector('.total-score'); // Updated selector
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qa_set = document.querySelectorAll('.qa_set'); // Updated selector
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');
var answered = false; // Flag to indicate whether the question has been answered

skip.addEventListener('click', function () {
    step();
    duration = 10;
});

qaAnsRow.forEach(function (qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function () {
        if (!answered) { // Check if the question has not been answered already
            setTimeout(function () {
                step();
                duration = 10;
            }, 500);
            var valid = this.getAttribute("valid");
            if (valid == "valid") {
                scoreCount += 5;
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            } else {
                scoreCount -= 5;
                score.innerHTML = scoreCount;
                totalScore.innerHTML = scoreCount;
            }
            answered = true; // Set answered flag to true
        }
    });
});

function step() {
    answered = false; // Reset answered flag when moving to the next question
    count += 1;
    for (var i = 0; i < qa_set.length; i++) {
        qa_set[i].className = 'qa_set';
    }
    qa_set[count].className = 'qa_set active';
    if (count == 19) { // Changed condition to check if count equals 19 (last question)
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(function () {
    if (duration == 10) {
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if (duration == 10) {
        step();
    }
}, 1000);
