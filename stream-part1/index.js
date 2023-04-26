const fs = require("fs");
const readline = require("readline");

let buffer = Buffer.from([]);
const rStream = fs.createReadStream("input.txt");

let counter = 0;

rStream.on("data", (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  counter++;
});

rStream.on("end", () => {
  const bufferLog = buffer.toString().split(" ").length;
  console.log("word count in text:", bufferLog);
});

