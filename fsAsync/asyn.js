const fs = require('fs');

//fs.mkdir('trial',(err)=> {
   // console.log('create a folder');
//});

//fs.writeFile('./trial/bio.txt','Dumb yard!',(err) => {
    //console.log('file created');
//});

//fs.appendFile('./trial/bio.txt','(:add something macha!', (err) => {
  //  console.log('added dumb');
//})

fs.readFile('./trial/bio.txt','utf-8',(err,data) => {
    console.log('data');
})