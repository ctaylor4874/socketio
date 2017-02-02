const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('greeting', function(data){
        console.log('I got this greeting: ', data);
        socket.emit('greeting-reply', 'thank you for saying: "' + data + '"!');
    });
    socket.on('disconnect', function(){
        console.log('a user disconnected');
    })
});

// io.emit('welcome', 'welsome to the demo');

http.listen(3000, function () {
    console.log('Listening on 3000')
});
