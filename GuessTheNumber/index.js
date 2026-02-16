
const form = document.querySelector('form');
const guessField = document.querySelector('.lastResult');
const preGuessField = document.querySelector('.guesses');
let guessCount = 10;
let guesses = [];
const ranNum = Math.floor(Math.random() * 100) + 1;
console.log(ranNum);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = parseInt(document.getElementById('guessField').value);
    if(isNaN(input) || input < 1 || input > 100 || guesses.includes(' ' + input)){
        alert('Please enter a valid/non-repeat number between 1 and 100.');
        return
    }

    guessField.innerHTML = --guessCount
    guesses.push(' ' + input);
    preGuessField.innerHTML = guesses;
    if(guessCount){
        if(input === ranNum){
            alert('Congratulations! You guessed the number!');
            window.location.reload();
        }
        else if(input < ranNum){
            document.querySelector('.lowOrHi').innerHTML = `${input} is low! Try again.`;
        }
        else{
            document.querySelector('.lowOrHi').innerHTML = `${input} is high! Try again.`;
        } 
    }
    else{
        alert('Game Over! The number was ' + ranNum);
        window.location.reload();
    }
})