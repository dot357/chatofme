var express = require('express'); //express js i çağırdık 
var app = express();  
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
var mkdirp = require('mkdirp');






function Cipher(data, encodepassword) {

    
    //burda şifreleme olucak

    //data mesajdan oluşuyor encodepassword de bir string
    //burda şifreleme algoritması olucak




    return console.log(data,encodepassword);
}

var path = require('path'); // bu pathi tanımlıyor
app.use(express.static(path.join(__dirname, 'public')));  // public dosya kullandırmak için

roomlist = [];

connections = []; //her oda için nameConnections oluştur populasyon ordan hesaplanıcak

server.listen(process.env.PORT || 3000 );  //port belirttik nerden dinliyiceğine dair
console.log('Server Runing...');


// ana sayfayı sunmak için
app.get('/', function(req, res){

    res.sendFile(__dirname + '/landing.html');
    //res.sendFile(__dirname + '/landing.html');

});

// app sayfasını sunmak için
/*
app.get('/app', function(req, res){


    //before redirect it here get the post method and check the page exist or not if so redirect else create the server
    res.sendFile(__dirname + '/index.html');
    

}); */
var defRoom = "index";

io.sockets.on('connection', function(socket){



    socket.on('join', function(data){
        
        console.log('User Joined the room => '+data);
        //console.log(this.rooms.length);
 
        socket.join(data);
        

        });
    
   
   

    //disconnect
    socket.on('disconnect', function(data){

        connections.splice(connections.indexOf(socket), 1);
        

    });


 
    //Send messages

    //Probably i will localy encode it here before i send it and when i recive i will decode it with given paramethers
    socket.on('send message', function({ msg, roomName }){
        
        //Cipher(data,'emre');
        
        //console.log('room recieved name is ' + data); oda adını gösteriyor
        //socket.broadcast.emit('new message', {msg});
        socket.broadcast.to(roomName).emit('new message', {msg});
        
        //socket.to(roomName).emit('new message', {msg});
        //io.sockets.emit('new message', {msg});
        console.log(msg, roomName);
    
      
        
        //io.sockets.emit('send gif', {gif: data});
        
    });




        //bu aranan odaya gitmek için

    socket.on('search', function (data) {
        //io.sockets.emit('searchs', {search:data});

        //Landingconnections = []; 
        
        if(fs.existsSync('/rooms/'+data+'.html')==1){

            console.log(data);

            // app sayfasını sunmak için ROOMSTAN ALICAZ
            app.get('/'+data, function(req, res){


                //before redirect it here get the post method and check the page exist or not if so redirect else create the server
                res.redirect(__dirname+ '/' + data);
    

});


        }
        
        else{
            //check auth for the site
            console.log('No file');

            //auth will be here this is test

            var path = __dirname + "/rooms";
            var tforindex = fs.readFileSync('origin.html');
            
            console.log('%s room created',data);

              
            //tripspaces will be here
            mkdirp(path, function (err) {
                const filename = data+'.html';
                fs.writeFileSync(path + "/" + filename, tforindex) 
              })
            
            
            
            
            
            // app sayfasını sunmak için ROOMSTAN ALICAZ
                app.get('/'+data, function(req, res){


                //before redirect it here get the post method and check the page exist or not if so redirect else create the server
                res.sendFile(__dirname + '/rooms/'+data+'.html');
               
                
                });


 
        }


       //Birazdan kullanılmayan serverlar silinicek onu yapıcam
      
      
        
    });

});


 