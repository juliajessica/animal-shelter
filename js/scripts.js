$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#btn-change").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $(".test").addClass("white-text");
  });
  $("button#btn-change1").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    $(".test").addClass("black-text");
  });
});
