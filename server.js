var express = require('express'); //express js i çağırdık 
var app = express();  
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);



var path = require('path'); // bu pathi tanımlıyor
app.use(express.static(path.join(__dirname, 'public')));  // public dosya kullandırmak için

users = [];

connections = [];

server.listen(process.env.PORT || 3000 );  //port belirttik nerden dinliyiceğine dair
console.log('Server Runing...');


// ana sayfayı sunmak için
app.get('/', function(req, res){

    res.sendFile(__dirname + '/index.html');

});

io.sockets.on('connection', function(socket){
    //connect 
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    //disconnect
    socket.on('disconnect', function(data){

        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length); 

    });



    //Send messages

    //Probably i will localy encode it here before i send it and when i recive i will decode it with given paramethers
    socket.on('send message', function(data){
        
        io.sockets.emit('new message', {msg: data});
        

    });

});


 