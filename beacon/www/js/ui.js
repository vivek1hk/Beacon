$(document).ready(function(){
  $("#map").height(window.innerHeight/2);
  $("header > .container").height(window.innerHeight);
  $(".card").height(window.innerHeight - ($("header .header-content").height() + 80));
});
$(document).resize(function(){
  $("#map").height(window.innerHeight/2);
  $("header > .container").height(window.innerHeight);
  $(".card").height(window.innerHeight - ($("header .header-content").height() + 80));
});
