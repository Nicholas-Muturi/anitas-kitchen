$(document).ready(function(){
  $(".toggle#enable i").click(function(e){
    $(".menu").toggleClass("active");
    $(".toggle#enable").hide();
    $(".toggle#disable").show();
    $(".menu").attr("inactive");
    e.preventDefault();
  });

  $(".toggle#disable i").click(function(e){
    $(".menu").toggleClass("active");
    $(".toggle#enable").show();
    $(".toggle#disable").hide();
    $(".menu").attr("active");
    e.preventDefault();
  });
});
