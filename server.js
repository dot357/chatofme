var express = require('express'); //express js i çağırdık 
var app = express();  
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');

//make dir rm dir
var mkdirp = require('mkdirp');
var rmdir = require('rmdir');


var path = require('path');


//Crypto

var CryptoJS = require("crypto-js");






//this will be output rooms 
console.log("Server Starting...");
console.log("File dump started =>");
console.log("List of the rooms before the last dump:");


    




var dirPath = path.join(__dirname, 'rooms');

    fs.readdir(dirPath, function (err, files) {
        if (err) {
            return console.log('No rooms to deleted'  );
        } 
        files.forEach(function (file) {
            // Do something with the file.
            console.log(file); 
        });
    }); 
//server wipe will be done every 20 min
//this will be the timer

//When server reboot delete all the rooms
//recursively deletes all files included rooms dir 

rmdir(dirPath , function (err, dirs, files) {
  console.log(dirs);
  console.log(files);
  console.log('all files are removed');
});









function trimmer(x){
    
    
    tempUrl = x;
    
    tempUrl = tempUrl.replace('https','');
    tempUrl = tempUrl.replace('//','');



    
    
    
    tempUrl = tempUrl.replace(':','');

    
    tempUrl = tempUrl.replace('/','');

    

    tempUrl = tempUrl.replace('app.liberi.world','');

    

    tempUrl = tempUrl.replace('165.227.149.7:3000','');
    
    
    tempUrl = tempUrl.replace('//','');

    

     return tempUrl;
   
}



function Cipher(msg, pass) {

    let localPass = pass;
    let encodedMsg = msg;
    
    //burda şifreleme olucak

    //data mesajdan oluşuyor encodepassword de bir string
    //burda şifreleme algoritması olucak




    return console.log(msg,encodepassword);
}

var path = require('path'); // bu pathi tanımlıyor
app.use(express.static(path.join(__dirname, 'public')));  // public dosya kullandırmak için

roomlist = [];

connections = []; //her oda için nameConnections oluştur populasyon ordan hesaplanıcak

server.listen(process.env.PORT || 3000 );  //port belirttik nerden dinliyiceğine dair
console.log('Server Runing and Functioning...');




//Add 404 support




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

        
        
       
        //console.log(this.rooms.length);

        console.log(data);

     

        let localTemp = trimmer(data);

        console.log('User Joined the room => '+ localTemp);
        
        socket.join(localTemp);
        
        

        });
    
   
   

    //disconnect
    socket.on('disconnect', function(data){

        connections.splice(connections.indexOf(socket), 1);
        

    });

    
 
    //Send messages

    //Probably i will localy encode it here before i send it and when i recive i will decode it with given paramethers
    socket.on('send message', function({ msg, roomName, pass }){
        
        //Cipher(data,'emre');
        let localroomName = trimmer(roomName);
       
       
       if(pass.length === 0){
         //mesajı client olmayan odadaki herkese yolluor  
        socket.broadcast.to(localroomName).emit('new message', {msg});  

       }

       else{

        let cipherMsg = CryptoJS.AES.encrypt(msg, pass).toString();
        
        console.log("Messahe is %s",cipherMsg);
        /*
        decip = CryptoJS.AES.decrypt(cipherMsg, 'pass').toString(CryptoJS.enc.Utf8);
        console.log("Decyripted  version  %s",decip );
        */
         
        msg=cipherMsg;
        socket.broadcast.to(localroomName).emit('new message', {msg,pass});
       }
        

      
        
        console.log("message:%s => roomName:%s ,,, PASS is => %s",msg, localroomName,pass);
        


        
      
        
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


//Add 404 page please
