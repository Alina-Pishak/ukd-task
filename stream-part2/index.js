const fs = require("fs");
const { Transform } = require("stream");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperCaseChunk = chunk
      .toString()
      .toLowerCase()
      .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
    this.push(upperCaseChunk);
    callback();
  },
});

const filePath = "input.txt";
const writePath = "write.txt";

const rStream = fs.createReadStream(filePath, "utf8");

let data = "";
upperCaseTransform.on("data", (chunk) => {
  data += chunk;
});

const wStream = fs.createWriteStream(writePath, "utf8");
rStream.pipe(upperCaseTransform).pipe(wStream);

upperCaseTransform.on("end", () => {
  console.log("text UpperCase add in file");
});