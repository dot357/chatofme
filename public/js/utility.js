
$(function(){
    var roomname=document.URL;
    
    
    
    function roomTrimmer(x){
    
    tempUrl = x;
    tempUrl = tempUrl.replace('http','');
    tempUrl = tempUrl.replace('/','');
    tempUrl = tempUrl.replace(':','');
    tempUrl = tempUrl.replace('localhost:3000','');
    tempUrl = tempUrl.replace('//','');
    
    //debug  console.log("temp  => ",tempUrl);
    
     return tempUrl;
    
    }
    
    
    
    
    var  socket =  io.connect(); //burda girişte bağlamayı halletiğin an tammadır 
    socket.emit('join',roomname);
    var  $messageForm = $('#messageForm');
    var  $message = $('#message');
    var  $chat = $('#chat');
    var  $output = $('#output');
    
    function HtmlEncode(s)
    {
      var el = document.createElement("div"); 
      el.innerText = el.textContent = s;
      s = el.innerHTML;
      return s;
    }
    
    
    $('#roomName').attr('placeholder','/'+HtmlEncode(roomTrimmer(roomname)));
    
    
    
    
    // msg send tools start
    
    $("#sender").click(function(f) {
      f.preventDefault();
    
    
      let msg = HtmlEncode($message.val());
      
      if($message.val() != '' && $message.val() != ' ' )  {
        socket.emit('send message', { msg:msg,roomName:roomname });
        $chat.append('<div class="w-full float-left">'+'<div class="animated fadeIn      p-5  float-right">'+ '<i class="fas fa-paper-plane text-gray-400"></i>'+'<span  class=" shadow-lg p-2 bg-gray-400  rounded-full">' + HtmlEncode($message.val())   + '</span>'  +'</div>'+ '</div>' ) ;
         $message.val('');
    
    
      }
      else  
          console.log("You cant send an empty message");
    });
    
    
     
    $messageForm.submit(function(e){
      e.preventDefault();
      if($message.val() != '' && $message.val() != ' ' )  {
        
        //buraya xss tagları removelatacağım
      //serverdaki send message fonksiyonuna gidiyor
      //socket.emit('send message', HtmlEncode($message.val()),roomname );
    
      socket.emit('send message', { msg:HtmlEncode($message.val()),roomName:roomname });
      $chat.append('<div class="w-full float-left">'+'<div class="animated fadeIn      p-5  float-right">'+ '<i class="fas fa-paper-plane text-gray-400"></i>'+'<span  class=" shadow-lg p-2 bg-gray-400  rounded-full">' + HtmlEncode($message.val())   + '</span>'  +'</div>'+ '</div>' ) ;
      $message.val('');
    }
    else  
      console.log("You cant send an empty message");
      
    });
    
    // msg send tools end
    
    
    
     
    socket.on('new message', function(data){
      
      //console.log(data+ '<br /> room name : ' + roomname);
      $chat.append('<div class="animated fadeIn   w-full    p-5 float-left">'+ '<i class="  fas fa-paper-plane text-blue-300"></i>'+'<span class="shadow-lg  p-2 bg-blue-200  rounded-full">'+ data.msg   + '</span>'  +'</div>' ) ;
     
    });
    });