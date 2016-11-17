var abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function makeBtns() {

    var alphaBtns = document.getElementById('abcBtns');
    var ulAbc = document.createElement('ul');

    for (var i = 0; i < abcs.length; i++) {
        ulAbc.id = 'abcUL';
        ulAbc.className = 'clearfix';
        liAbc = document.createElement('li');


        liAbc.className = 'abcLI';
        liAbc.innerHTML = abcs[i];

        liAbc.addEventListener('click', function(event) {
            console.log('clicked ' + event.target.innerText);
            event.target.classList.add("used");
        });

        alphaBtns.appendChild(ulAbc);
        ulAbc.appendChild(liAbc);
    }
}
makeBtns();

function starwarsPeople() {
    var rando = Math.floor((Math.random() * 88) + 1).toString();
    var requestStr = "http://swapi.co/api/people/"+rando+"/?format=json";
    var wordDisplay = document.getElementById('guessWord');

    $.ajax({
        type: "GET",
        url: requestStr,
        success: function (data){
        	console.log(data.name);
        	wordDisplay.innerHTML = data.name.replace(/[A-Za-z]/g, '_');

        	// convert name into a string of underscores
        	// convert the string (name) to an array see .split('')
        	// then iterate over the array and transform each value into "_"
        	// see .map(function() {...})
        	// turn the new array of underscores back into a string using .join('')
        }
    });
}
starwarsPeople();


















