/**
 * Created by codytaylor on 2/2/17.
 */
const socket = io();
socket.emit('greeting', 'Hello!');