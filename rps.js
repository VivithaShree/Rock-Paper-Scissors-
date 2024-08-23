//game page code

const quotes = [  
  '"Victory is sweetest when you’ve known defeat."',
  '"It’s not whether you win or lose, it’s how you play the game."',
  '"Sometimes you win, sometimes you learn."',
  '"Luck is what happens when preparation meets opportunity."'
];

document.querySelector('.quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];


// Load user data an
let nickname=localStorage.getItem("nick");



    document.getElementById('welcomeMessage').innerHTML = `Hey!!! Welcome to Rock Paper Scissors, <span class="highlight">${nickname}</span>!`;

    // Show welcome pop-up
    const welcomeMessages = [
        `Welcome back, ${nickname}! Ready for a challenge?`,
        `Good to see you, ${nickname}! Let's win this time!`,
        `Hey ${nickname}, let's see who's luckier today!`
    ];
    const emojis = ['😊', '😎', '👊'];

    document.getElementById('popupMessage').textContent = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    document.getElementById('welcomeEmoji').textContent = emojis[Math.floor(Math.random() * emojis.length)];

    document.getElementById('welcomePopup').style.display = 'flex';


// Function to close the pop-up
function closePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
}

// Score and game logic
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    let resultEmoji = '';

    if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            result = 'You win!';
            resultEmoji = '😄';
            score.wins += 1;
        } else if (computerMove === 'paper') {
            result = 'You lose.';
            resultEmoji = '😞';
            score.losses += 1;
        } else {
            result = 'It\'s a tie.';
            resultEmoji = '😐';
            score.ties += 1;
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!';
            resultEmoji = '😄';
            score.wins += 1;
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
            resultEmoji = '😞';
            score.losses += 1;
        } else {
            result = 'It\'s a tie.';
            resultEmoji = '😐';
            score.ties += 1;
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
            result = 'You win!';
            resultEmoji = '😄';
            score.wins += 1;
        } else if (computerMove === 'rock') {
            result = 'You lose.';
            resultEmoji = '😞';
            score.losses += 1;
        } else {
            result = 'It\'s a tie.';
            resultEmoji = '😐';
            score.ties += 1;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    document.querySelector('.result').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result} ${resultEmoji}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function resetScore() {
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('score');
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    document.querySelector('.result').textContent = '';
}


function updateBackground(result) {
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.classList.remove('win-bg', 'lose-bg', 'tie-bg');
  
    if (result === 'You win.') {
      backgroundContainer.classList.add('win-bg');
    } else if (result === 'You lose.') {
      backgroundContainer.classList.add('lose-bg');
    } else {
      backgroundContainer.classList.add('tie-bg');
    }
  
    setTimeout(() => {
      backgroundContainer.classList.remove('win-bg', 'lose-bg', 'tie-bg');
    }, 2000); // Reset background after 2 seconds
  }