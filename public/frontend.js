/**
 * Created by codytaylor on 2/2/17.
 */
const socket = io();
socket.emit('greeting', 'Hello!');

socket.on('greeting-reply', function(data){
    console.log('I got a reply: ', data);
});