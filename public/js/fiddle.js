

// set-up a connection between the client and the server
var socket = io.connect();

// let's assume that the client page, once rendered, knows what room it wants to join
var room = "abc123";

socket.on('connect', function() {
   // Connected, let's sign-up for to receive messages for this room
   socket.emit('room', room);
});

socket.on('message', function(data) {
   console.log('Incoming message:', data);
});






/*

giphy entegrasyonu


var btn3 = document.querySelector('.js-tingle-modal-3');
btn3.addEventListener('click', function(){
  modal.open();
  
}); 



instanciate new modal
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  
  onOpen: function() {
   
  },
  onClose: function() {
    modal.setContent('<h4>Gif Search</h4><form id="searchbox"><input type="text" id="search" style="color:black;" class="u-full-width"><br><button type="submit"  id="btnSearch"> Search</button></form><div class="gifs" id="searchresults"></div>');

  },
  beforeClose: function() {
       here's goes some logic
      e.g. save content before closing the modal
      modal.setContent('');
      return true;  close the modal
      
  }
});

set content
modal.setContent('<h4>Gif Search</h4><form id="searchbox"><input type="text" id="search" style="color:black;" class="u-full-width"><br><button type="submit"  id="btnSearch"> Search</button></form><div class="gifs" id="searchresults"></div>');



  







var api = "http://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=e3S9dS0c3TyNJwSi1u0bcAs9OLSA74JO";
var Search =  "?q="  //burda arama atanıcak


var  $searchbox =  $('#searchbox');
var $query = $('#search');
var $searchresults = $('#searchresults');


$searchbox.submit(function(e){

  e.preventDefault();
 
  var url = api+Search+$query.val()+apiKey;
    
 
   $.getJSON(url, function (data) {
   

    count = data.pagination.count;
    

    
      for(i=0;i<=count;i++){
      
        //buglu düzeltilmesi gereken kısım aradıktan sonra tekrar arayınca yeni query ataması lazım
        $searchresults.append('<button id="#gif'+i+'" style="height:auto;border:none;";"><img class="mobile" src='+data.data[i].images.original.url +'></button>');
        

        


        socket.emit('send gif', HtmlEncode($message.val()) );
        $message.val(''); 
        
        if($('#gif0').onclick == 1)
          console.log("1");  
          
          Buraya gife tıklayınca chate yollama kısmı gelicek
          
      }

      $searchresults.append('<br/><button type="submit" id="nextpage">Next Page</button><br/><br/>');

      


        


     
      
        $nextpage2.submit(function(e){

          e.preventDefault();
          console.log('cliked');
        }); 
    
    });

    buraya gifler gelicek
     

});
  




*/
