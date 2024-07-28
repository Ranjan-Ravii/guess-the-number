 const giveUpButton  = document.querySelector(".giveUp");
const playAgainButton  = document.querySelector('.palyAgain');
const numBox = document.querySelector('.num_box')
const result = document.querySelector('.result')
const guessButton  = document.querySelector('.guessbtn')
const countdownDisplay  = document.querySelector('.countdown')


let countdownValue = 10
const randomNum = Math.floor((Math.random() * 100) + 1)
console.log(randomNum)
var winAudio = document.querySelector(".myAudio_win");
var loosAudio = document.querySelector(".myAudio_loss");

function playAudioWin() {
  winAudio.play();
}
function playAudioLoos() {
  loosAudio.play();
}


giveUpButton.addEventListener('click', function () {
    numBox.value = '';
    result.innerHTML = "You Loosed the Game."
    countdownValue = 10;
    countdownDisplay.innerHTML = countdownValue;
    playAudioLoos()
    
})

playAgainButton.addEventListener('click', function () {
    numBox.value = '';
    result.innerHTML = "Let's Try and Guess it."
    countdownValue = 10;
    countdownDisplay.innerHTML = countdownValue;
    resetGame();
    
    
})



// for countdown 
// guessbtn.addEventListener('click', function () {
//     if (countdownValue > 0) {
//         countdownValue -= 1;
//         countdown.innerHTML = countdownValue
//     }
//     else {
//         result.innerHTML = "Loosed..! No chance left."
//     }
// })

// taking input and matching with the result



guessButton.addEventListener('click', function () {
    if (countdownValue > 0) {
        countdownValue -= 1;
        countdownDisplay.innerHTML = countdownValue;

        if (randomNum == numBox.value) {
            playAudioWin()
            result.innerHTML = "Congratulations! You won.";
        } else if (randomNum > numBox.value) {
            numBox.value = '';
            result.innerHTML = "Expected num is Greater";
        }
        else if(randomNum < numBox.value){
            numBox.value = '';
            result.innerHTML = "Expected num is Smaller";
        }
        if (countdownValue === 0) {
            numBox.value = '';
            playAudioLoos()
            result.innerHTML = `You lost..! it's ${randomNum}`;
        }
    }

});

function resetGame(){
    location.reload()
}

