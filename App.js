console.log("Lab 03 - NodeJS Setup Successful!");
const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});



