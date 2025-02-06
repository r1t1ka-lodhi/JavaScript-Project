let random=(parseInt(Math.random() * 100 + 1));
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[];
let numGuesses=1;
let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=(parseInt(userInput.value));
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid nummber')
  }else if(guess<1){
    alert('please enter a nummber greater than 1')
  }
  else if(guess>100){
    alert('please enter a nummber leass than 100')
  }else{
    prevGuess.push(guess);
    if(numGuesses===11){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}, want to guess again`)
      endGame()
    }else{
      //numGuesses++
      displayGuess(guess);
      checkGuess(guess,random);
    }
  }
}
function checkGuess(guess,random){
  if(guess=== random){
    displayMessage(`You gussed it right,Random number was${random},Want to start over`)
    endGame();
  }else if(guess<random){
    displayMessage(`Number is too low`)
  }else if(guess>random){
    displayMessage(`Number is too High`)
  }
}
function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML+=`${guess}, `;
  numGuesses++;
  remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML='<h3 id="newGame">Start new game</h3>';
  startOver.appendChild(p);
  playGame=false
  newGame()
}
function newGame(){
  const newGame=document.querySelector('#newGame');
  newGame.addEventListener('click',function(e){
    random=parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuesses=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuesses}`
    userInput.removeAttribute('disabled','')
    startOver.removeChild(p);
    playGame=true
  })
}