
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
		alphaBtns.appendChild(ulAbc);
		ulAbc.appendChild(liAbc);
	}
}

makeBtns();



















