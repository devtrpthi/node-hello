const fs = require('fs');

const biodata = {
  name: "Dev",
  age: 19,
  channel: "bruh"
};

const jsonData = JSON.stringify(biodata);
 fs.writeFile("json1.json", jsonData,(err) => {
    console.log("done");
})

fs.readFile("json1.json","utf-8", (err,data) => {
  console.log(data);
})
