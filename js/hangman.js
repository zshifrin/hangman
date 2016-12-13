(function() {

    var abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var wordDisplay = document.getElementById('guessWord');

    var answer = '';

    var strikeCount = 1;

    //Modal
    var modal = document.getElementById('myModal');
    var win = document.getElementById('win');
    var loss = document.getElementById('loss');

    //Audio
    var freeWook = new Audio('sounds/freeWook.mp3');
    var deadWook = new Audio('sounds/deadWook.mp3');



    makeBtns();
    setRandomAnswer();
    replay();

    function isGameOver() {
        return strikeCount == 10;
    }

    function makeBtns() {

        var alphaBtns = document.getElementById('abcBtns');
        var ulAbc = document.createElement('ul');


        for (var i = 0; i < abcs.length; i++) {
            ulAbc.id = 'abcUL';
            ulAbc.className = 'clearfix';
            letters = document.createElement('li');


            letters.className = 'letters';
            letters.innerHTML = abcs[i];

            letters.addEventListener('click', function(event) {
                console.log(answer);
                console.log('clicked ' + event.target.innerText);
                event.target.classList.add("used");

                guess(event.target);
            });

            alphaBtns.appendChild(ulAbc);
            ulAbc.appendChild(letters);
        }

    }

    function replay() {
    	var respawn = document.getElementById("respawn");

    	respawn.addEventListener('click', function() {
    		location.reload();
    	});
    }

    // Every time letter is clicked
    function guess(letterElement) {
        var guessedLetter = letterElement.innerText;
        var placeholder = wordDisplay.innerText.split('');
        var isWrong = true;
        answer.split('').forEach(function(letter, index) {
            console.log("Current letter is " + letter);
            if (letter.toLowerCase() == guessedLetter) {
                console.log(letter + " exists at the index " + index);
                placeholder[index] = letter;
                isWrong = false;
            }
        });

        if (isWrong && false === isGameOver()) {
            strikeCount++;
            console.log(strikeCount + " strikes so far");
            document.getElementById("hanger").src = "img/" + strikeCount + ".png";
        }

        if (strikeCount == 10) {
        	win.style.display = "none";
        	modal.style.display = "block";
        	deadWook.play();

        }

        wordDisplay.innerText = placeholder.join('');

        if (wordDisplay.innerText == answer) {
        	loss.style.display = "none";
        	modal.style.display = "block";
        	freeWook.play();
        }

        // if word contains this letter
        // go to the dom, put the letter in
        // var letter = letterElement.innerText;
        // go to dom and get inner text of the _ container
        // ['w', 'o', 'r', 'd', 'd']
        // matched indexes = 3 and 4
        // find every index that matches "letter", say letter is "d"
        // ['_', 'o', '_', '_', '_']
        // fill in array of underscores, replace _ at every matched index
    }

    function setRandomAnswer() {
        var rando = Math.floor((Math.random() * 88) + 1).toString();
        var requestStr = "http://swapi.co/api/people/" + rando + "/?format=json";

        $.ajax({
            type: "GET",
            url: requestStr,
            success: function(data) {
                console.log(data.name);
                wordDisplay.innerHTML = data.name.replace(/[A-Za-z]/g, '_');

                answer = data.name;
                // convert name into a string of underscores
                // convert the string (name) to an array see .split('')
                // then iterate over the array and transform each value into "_"
                // see .map(function() {...})
                // turn the new array of underscores back into a string using .join('')
            }
        });
    }

})();
