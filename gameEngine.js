// initialize game variables
var curr_player = "";
var XsAndOs = ["X", "O"];
var scores = [0,0];
var endgames = [7,56,73,84,146,273,292,448];
var clicked = [];
var clickclock = 0;
var whose_turn = 0;
var winner = "";

// X starts the game by default
function startgame(){
	alert('X goes first..')
	curr_player = 'X';
	document.getElementById("curr_player").innerHTML = "'X' may proceed";
	document.getElementById("curr_player").style.color = "#FFBF67";

}

// continuous state machine for the game
function playgame(clickedDiv, points){
	//clickedDiv is DOM object  

	if (clickedDiv.innerHTML === '&nbsp;'){
		// updates the board each turn depending on whose turn it is and where they have clicked
		updateboard(clickedDiv);

		// updates each players score after they have made a move
		updatescore(points);

		// check for end game scenarios before continuation of the game
		updatestatus(scores[whose_turn]);
	}
}

// updates the board each turn depending on whose turn it is and where they have clicked
function updateboard(clickedDiv){
	if (clickedDiv.innerHTML === "&nbsp;"){
		clicked[clickclock] = clickedDiv;
		clickclock = clickclock + 1;
		if (whose_turn === 0){
			clickedDiv.innerHTML= "<span>" + XsAndOs[0] + "</span>";  //X
		}
		else{
			clickedDiv.innerHTML= "<span>" + XsAndOs[1] + "</span>";  //O
		}
	}
}

// updates each players score after they have made a move
function updatescore(userPoints){
	scores[whose_turn] += userPoints;
}

// check for end game scenarios before continuation of the game
function updatestatus(score){
	for (var i = 0; i < endgames.length; i++){
		if ((endgames[i] & score) === endgames[i]){
			//binary bit &operation, only both true is true
			winner = curr_player;
			
			break;
		}
	}
	//analyze result
	if (winner !== ""){
		alert(winner + " has emerged triumphant!");
		newgame();
	}
	else if (clickclock > 8){
		alert("Xs and Os have arrived upon an impasse.. Tie Game");
		newgame();
	}
	else{
		updateturn();
	}

}

// change who the current player is depending on who played the last turn
function updateturn(){
	if (whose_turn === 0) 
		whose_turn = 1;
	else 
		whose_turn = 0;

	if (curr_player === 'X'){
		curr_player = 'O';
		document.getElementById("curr_player").innerText = "'O' may proceed";
	}
	else{
		curr_player = 'X';
		document.getElementById("curr_player").innerText = "'X' may proceed";
	}
}

// reinitialize the board in preparation for a new game
function newgame(){
	scores = [0,0];
	clickclock = 0;
	whose_turn = 0;
	winner = "";
	for (var i = 0; i < clicked.length; i++){
		clicked[i].innerHTML = "&nbsp;"; 
	}
	document.getElementById("curr_player").innerHTML = "X may proceed";

}

