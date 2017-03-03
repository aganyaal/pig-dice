$(document).ready(function(){
  $("button#no").click(function (event) {
    $("div.definition").slideToggle(1500);
  });
  $("button#yes").click(function (event) {
    $("body").removeClass("page1");
    $("div#intro").slideToggle(2000);
    $("div#page").slideToggle(2000);
  });
});
