const fs = require('fs');
const https = require('https');
const fileUrl = 'http://dspace.wunu.edu.ua/bitstream/316497/612/1/vm_pidr.pdf'
const fileName = 'text-book.pdf'

https.get(fileUrl, (res) => {
  const file = fs.createWriteStream(fileName);
  res.pipe(file);
  
  file.on('finish', () => {
    console.log('Download complete.');
    file.close();
  });
})