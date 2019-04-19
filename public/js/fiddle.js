

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=e3S9dS0c3TyNJwSi1u0bcAs9OLSA74JO
//giphy search
//giphy
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
    

    if(count >=5){
      for(i=0;i<=5;i++){
      
        //buglu düzeltilmesi gereken kısım aradıktan sonra tekrar arayınca yeni query ataması lazım
        $searchresults.append('<button id="#gif'+i+'" style="border:none;";"><img class="mobile" src='+data.data[i].images.original.url +'></button>');
        

        


        /*socket.emit('send gif', HtmlEncode($message.val()) );
        $message.val(''); 
        */
       /* if($('#gif0').onclick == 1)
          console.log("1");  
          
          Buraya gife tıklayınca chate yollama kısmı gelicek
          */
      }

      //$searchresults.append('<br/><button type="submit" id="nextpage">Next Page</button><br/><br/>');

      


        


        }

      
       /* $nextpage2.submit(function(e){

          e.preventDefault();
          console.log('cliked');
        }); */
    
    });

    //buraya gifler gelicek
     

});
  





