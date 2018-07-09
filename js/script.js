$(document).ready(function(){

  $(".subscribe-section form").submit(function(event){
    var email= $("input.email-input").val();
    alert("Thank you " +email+ " for subscribing :)");
    event.preventDefault();
  });

  $(".toggle#enable i").click(function(){
    $(".menu").toggleClass("active");
    $(".toggle#enable").hide();
    $(".toggle#disable").show();
  });

  $(".toggle#disable i").click(function(){
    $(".menu").toggleClass("active");
    $(".toggle#enable").show();
    $(".toggle#disable").hide();
  });

});
