const EventEmitter = require('events');
const event = new EventEmitter();

 event.on('myname', () =>{
  console.log('my name is dash');
});

event.on('fire', () => {
  console.log('f u')
})
event.emit('myname');
event.emit('fire');

event.on('checkpage', (sc,msg) => {
  console.log(`status code is {sc} and message delievered is {msg}`);
});

event.emit('checkpage', 200, 'ok');
