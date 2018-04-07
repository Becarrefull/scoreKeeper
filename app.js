var scorePlayer1 = 0;
var scorePlayer2 = 0;
var played = 5;

function changeSelect(event){
  reset();
  played = event.target.value;
  console.log (played);
  document.getElementById('played').innerHTML = played;
}

document.getElementById('btnPlayer1').addEventListener('click', 
  function(){
    if (scorePlayer1 < played && scorePlayer2 != played) {
      scorePlayer1 += 1;
      document.getElementById('scorePlayer1').innerHTML=scorePlayer1;
      if (scorePlayer1 == played){
        document.getElementById('scorePlayer1').style.color = "green"
      } 
    }
  })

document.getElementById('btnPlayer2').addEventListener('click', function(){
  if (scorePlayer2 < played && scorePlayer1 != played) {
    scorePlayer2 += 1;
      document.getElementById('scorePlayer2').innerHTML=scorePlayer2;
      if (scorePlayer2 == played){
        document.getElementById('scorePlayer2').style.color = "green";
      } 
    }
  })


document.getElementById('btnReset').addEventListener('click', reset);



function reset(){
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  played = 5;
  document.getElementById('scorePlayer1').innerHTML=scorePlayer1;
  document.getElementById('scorePlayer2').innerHTML=scorePlayer2;
  document.getElementById('scorePlayer1').style.color = "black";
  document.getElementById('scorePlayer2').style.color = "black";
}
