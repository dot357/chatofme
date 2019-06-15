




$("#inputArea").focusout(function(){

 
$("#sendButton").removeClass("fa-paper-plane");

$("#sendButton").addClass("fa-microphone");


});




$('#swipezone').click(function(){

  $("#chatGimmick").fadeOut();
  $("#chatclose").removeClass("invisible");
  $("#chatclose").fadeIn();

});





$("#chatclose").click(function() {
  $("#chatclose").animate({left:"81vw"});

  $( "#chatclose" ).fadeOut();
  
 
  $("#chatGimmick").fadeIn();
  
  $("#chatclose").animate({left:"0vw"});
  
   
});



$("#utilities-close").click(function() {
  

  $( "#utilities" ).fadeOut();
  

});

$("#utilities-open").click(function() {
  
  $( "#utilities" ).removeClass("invisible");
  $( "#utilities" ).fadeIn();
  

});


$( "#cambox" ).css('opacity', '0');
let count= 0;

$("#cambox-open").click(function() {
  
  ++count;


  if(count >= 1 ){
    $( "#cambox" ).animate({opacity : "1"});
    //$( "#cambox" ).css('opacity', '1');
    $( "#cambox" ).fadeIn();
  }
  
  if(count%2 === 0){
    $( "#cambox" ).fadeOut();
    count = 0;
  }
 

});





