const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    //start game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option=>{
            option.addEventListener('click', function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //here is where we call compare hands
                setTimeout(()=>{
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.jpg`;
                    computerHand.src = `./assets/${computerChoice}.jpg`;
                }, 2000);
                
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        });
    };


    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //update text
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie!~";
            return;
        }
        //check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === "scissors"){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //check paper
        if(playerChoice === 'paper'){
            if(computerChoice === "scissors"){
                cScore++;
                updateScore();
                winner.textContent = 'Computer Wins!';
                return;
            }else {
                pScore++;
                updateScore();
                winner.textContent = "Player Wins!";
                return;
            }
        }
        //check scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === "rock"){
                cScore++;
                updateScore();
                winner.textContent = 'Computer Wins!';
                return;
            }else {
                pScore++;
                updateScore();
                winner.textContent = "Player Wins!";
                return;
            }
        }
    };


    //call all the inner functions
    startGame();
    playMatch();
};


//start the game function;
game();