
function rolldice1(dice) {
  var die1 = document.getElementById("die1");
  var span1 = document.getElementById("span1");

 var d1 = Math.floor(Math.random()*6)+1;


  die1.innerHTML = d1;
  span1.innerHTML = "You rolled " + d1 + ".";
  if (d1==1) {
    span1.innerHTML = "You get nothing.";
  }

  if (d1==1) {
    alert("Your turn is over")
    document.getElementById("roll1").disabled=true;
    document.getElementById("hold1").disabled=true;
    document.getElementById("roll2").disabled=false;
    document.getElementById("hold2").disabled=false;
  }
}
function rolldice2() {
  var die2 = document.getElementById("die2");
  var span2 = document.getElementById("span2");
  var d2 = Math.floor(Math.random()*6)+1;
  die2.innerHTML = d2;
  span2.innerHTML = "You rolled " + d2 + ".";
  if (d2==1) {
    span2.innerHTML = "You get nothing.";
  }
  if (d2==1) {
    alert("Your turn is over")
    document.getElementById("roll2").disabled=true;
    document.getElementById("hold2").disabled=true;
    document.getElementById("roll1").disabled=false;
    document.getElementById("hold1").disabled=false;
  }
}
function hold1() {
  document.getElementById("roll1").disabled=true;
  document.getElementById("hold1").disabled=true;
  document.getElementById("roll2").disabled=false;
  document.getElementById("hold2").disabled=false;
}
function hold2() {
  document.getElementById("roll2").disabled=true;
  document.getElementById("hold2").disabled=true;
  document.getElementById("roll1").disabled=false;
  document.getElementById("hold1").disabled=false;
}




$(document).ready(function(){
  document.getElementById("roll2").disabled=true;
  document.getElementById("hold2").disabled=true;
  $("button#no").click(function (event) {
    $("div.definition").slideToggle(1500);
  });
  $("button#yes").click(function (event) {
    $("body").removeClass("page1");
    $("div#intro").slideToggle(2000);
    $("div#page").slideToggle(2000);
  });
});
