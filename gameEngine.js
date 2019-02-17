// initialize game variables
var p1 = "";
var p2 = "";
var curr_player = "";
var XsAndOs = ["X", "O"];
var scores = [0,0];
var clicked = [];
var clicker = 0;
var whose_turn = 0;
var winner = "";

// set the stage for the tic tac toe game of a lifetime
function startgame(){
	p1 = prompt('Ready player 1? What shall we call you?:');
	p2 = prompt('Ready player 2? What shall we call you?:');
	curr_player = p1;
	document.getElementById("currentplayer").innerHTML = "your turn" + curr_player;
}