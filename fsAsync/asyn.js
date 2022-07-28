const fs = require('fs');

//fs.mkdir('trial',(err)=> {
   // console.log('create a folder');
//});

fs.writeFile('./trial/bio.txt','Dumb yard!',(err) => {
    console.log('file created');
});