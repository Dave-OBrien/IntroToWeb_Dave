function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
/*

function rollDice(){
    var y=document.getElementById("startBet");
    var startingBet = parseInt(y.elements["startBet"].value);
    alert(startingBet);
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    var numRolls;
    var runningTotal;
    var maxWon;
    die1.innerHTML = d1;
    die2.innerHTML = d2;

}

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };

  function change() // no ';' here
{
    var elem = document.getElementById("btnPlay");
    if (elem.value=="Play") elem.value = "Play Again";
    else elem.value = "Play";
}




*/
function changeButton()

{
    if (document.getElementById('btnPlay').value=="Play") 
    {document.getElementById("btnPlay").value="Play Again";
    //document.getElementById("btnPlay").onclick=test();
    //location.reload();  
}
    else {document.getElementById("btnPlay").value="Play";
    location.reload();}
    //document.getElementById("btnPlay").onclick="rollDice(document.formDice.startBet.value)";
    //test2;

}

function test()
{
    //alert("testing")
}

function test2(){
    alert("2")
}