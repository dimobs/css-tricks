const fs = require('fs');
// const zlib = require('zlib');

// const gzip =  zlib.createGzip();
// const readStream = fs.createReadStream('./input.txt');
// const writeStream = fs.createWriteStream('./output.txt')

// readStream.pipe(gzip).pipe(writeStream);

let data = fs.readdir('../', 'utf8', (err, data) =>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(data)
});