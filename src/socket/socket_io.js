import io from 'socket.io-client';

const socket=io('ws://localhost:8080')

socket.emit('greet','hello server!')

socket.on('greetback',function(data){
    console.log('接受消息：',data);
    
})