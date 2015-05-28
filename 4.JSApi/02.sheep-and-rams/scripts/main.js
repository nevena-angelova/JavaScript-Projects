/// <reference path="../index.html" />
window.onload = function () {

    var gameDiv = document.getElementById('game'),
        errorMsgDiv = document.getElementById('errorMsg'),
        gameEndDiv = document.getElementById('gameEnd'),
        guessedNumberSpan = document.getElementById('guessedNumber'),
        guessesCounter = 0,
        newGameDiv = document.getElementById('newGame'),
        nickSubmit = document.getElementById('nickSubmit'),
        highScoreUl = document.getElementById('highScore'),
        highscoreLi = document.createElement('li'),
        formerNumbersUl = document.getElementById('formerNumbers'),
        formerNumbersLi = document.createElement('li'),
        numberSubmit = document.getElementById('numberSubmit'),
        DIGIT_COUNT = 4,
        randNumber = generateRandomNumber(9, 0);

    // for test purpouse prints the random number on the console
    console.log(randNumber);

    numberSubmit.addEventListener('click', onCheckNumber, true);
    nickSubmit.addEventListener('click', onNickSave, true);
    newGameDiv.addEventListener('click', onNewGame, true);

    // generates a random 4 digit number
    function generateRandomNumber(max, min) {
        var count = 0,
            randomDigit,
            result = [];
        while (count < DIGIT_COUNT) {
            randomDigit = Math.floor(Math.random() * (max - min) + min);
            if (count === 0 && randomDigit === 0) {
                continue;
            } else if (isDigitUnique(result, randomDigit)) {
                count += 1;
                result.push(randomDigit);
            }
        }
        return result.join('');
    }

    function isDigitUnique(array, digit) {
        for (var i = 0, len = array.length; i < len; i += 1) {
            if (digit === array[i]) {
                return false;
            }
        }
        return true;
    }

    // checks wether the input number has sheep or rams and appends the result on the page
    // (the number is guessed or it is not guessed)
    function onCheckNumber() {
        var sheep = 0,
            rams = 0,
            number,
            input = readInput();

        // stops the executing of the function if the input is not valid
        if (input instanceof TypeError) {
            errorMsgDiv.innerHTML = input.message;
            return;
        } else {
            number = input;
            guessesCounter += 1;
        }

        for (var i = 0, randNumlen = randNumber.length; i < randNumlen; i += 1) {
            for (var j = 0, numLen = number.length; j < numLen; j += 1) {
                if (randNumber[i] === number[j]) {
                    if (i === j) {
                        rams += 1;
                        if (rams === DIGIT_COUNT) {
                            gameDiv.className = 'hidden';
                            gameEndDiv.className = '';
                            guessedNumberSpan.innerHTML = ' ' + number;
                            return;
                        }

                    } else {
                        sheep += 1;
                    }
                }
            }
        }

        formerNumbersLi.innerHTML = number + ' - rams: ' + rams + ' sheep: ' + sheep;
        formerNumbersUl.appendChild(formerNumbersLi.cloneNode(true));
    }

    // input checker - returns the exception object if the input is not valid otherwise the input value.
    function readInput() {
        try {
            var error;
            inputNumber = document.getElementById('numberInput').value;

            errorMsgDiv.innerHTML = '';

            if (!inputNumber) {
                error = new TypeError('Error! There is nothing entered!');
                throw error;
            } else if (!parseInt(inputNumber, 10)) {
                error = new TypeError('Error! The number is not valid!');
                throw error;
            } else if (inputNumber[0] == 0) {
                error = new TypeError('Error! The first digit needs to be different from zero!');
                throw error;
            } else if (!areDigitsUnique(inputNumber)) {
                error = new TypeError('Error! The digits need to be unique!');
                throw error;
            } else if (inputNumber.length !== DIGIT_COUNT) {
                error = new TypeError('Error! The digits need to be four!');
                throw error;
            }
        } catch (e) {
            return e;
        }
        return inputNumber;
    }

    function areDigitsUnique(number) {
        for (var i = 0, len = number.length; i < len - 1; i += 1) {
            for (var j = i + 1; j < len; j += 1) {
                if (number[i] === number[j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // here the guessesCounter is set to zero. It represent how many times the player is entered a number.
    // The player score is calculated according to guessesCounter. The faster the number is guessed, the highest the score is.
    function onNickSave() {
        if (guessesCounter > 0) {
            var nick = document.getElementById('nickInput').value;
            var score = Math.floor((1 / guessesCounter) * 1000);
            localStorage.setItem(nick, score);
            highScoreList();
            guessesCounter = 0;
        } else {
            return;
        }
    }

    // in an array of objects with keys name and score, the items from localStorage object are saved.
    // the array is sorted and the result is appended to the page.
    function highScoreList() {
        var players = [];
        for (var i = 0, len = localStorage.length; i < len; i += 1) {
            var player = {};
            var key = localStorage.key(i);
            player.name = key;
            player.score = localStorage[key];
            players.push(player);
        }

        players = players.sort(sortByScore);

        var playersFragment = document.createDocumentFragment();

        for (var i = 0, len = players.length; i < len; i += 1) {
            highscoreLi.innerHTML = 'Name: ' + players[i].name + ', Score: ' + players[i].score;
            playersFragment.appendChild(highscoreLi.cloneNode(true));
        }

        highScoreUl.appendChild(playersFragment);
    }

    function sortByScore(player1, player2) {
        return parseInt(player2.score, 10) - parseInt(player1.score, 10);
    }

    // when the button for new game is pressed
    function onNewGame() {
        randNumber = generateRandomNumber(9, 0);
        gameDiv.className = '';
        gameEndDiv.className = 'hidden';
        highScoreUl.innerHTML = '';
        formerNumbersUl.innerHTML = '';

        // for test purpouse prints the random number on the console
        console.clear();
        console.log(randNumber);
    }
}