

function box_click(){
	// if (isGameOver)
	// 		return;

	// if (!isValid(this)) {
	// 	// foo
	// } else {
	// 	setMark(this, players, curentPlayer)
	// }
	this.innerText = "x";
};		

$(function() {
  var players = ["x" , "O"];
	var curentPlayer = 0;
	// var isGameOver = false;
  var Boxs = document.querySelectorAll("button");

  // ////////////////Button Click/////////////
  for (var i = 0; i <= Boxs.length; i++) {
  	// Boxs[i].addEventListener("click", box_click(), false);
		Boxs[i].addEventListener("click",	function(){
			if (isGameOver(Boxs, players[curentPlayer])) {
				alert(players[curentPlayer]);
			};

			if (!isValid(this)){
				return;
			}
			setMark(this, players[curentPlayer]);
			curentPlayer++;
			curentPlayer = curentPlayer % 2;
		});

  };

});


function isGameOver (box, player) {
  if (box[0].innerText == player &&
      box[1].innerText == player &&
      box[2].innerText == player){
    return true;
  }

  return false;
}


function isValid (button) {
	return button.innerText == "";
};

function setMark(btn, player) {
  btn.innerText = player;
}

// $("button").click(function() {
//   alert( "Handler for .click() called." );
// });




