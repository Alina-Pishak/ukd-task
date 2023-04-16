// Шифрування текстового файлу та заміна тексту на зашифрований
require('pidcrypt/seedrandom');
const fs = require('fs');
const CryptoJS = require('crypto-js');

function encryptFile(filename, key, iv) {
  // зчитуємо текст з файлу
  const plaintext = fs.readFileSync(filename, 'utf8');

  // шифруємо текст AES алгоритмом
  const ciphertext = CryptoJS.AES.encrypt(plaintext, key, { iv: iv });

  // записуємо зашифрований текст у файл
  fs.writeFileSync(filename, ciphertext.toString());
}


// Дешифрування текстового файлу та заміна тексту на дешифрований

const fs = require('fs');
const CryptoJS = require('crypto-js');

function decryptFile(filename, key, iv) {
  // зчитуємо зашифрований текст з файлу
  const ciphertext = fs.readFileSync(filename, 'utf8');

  // дешифруємо текст AES алгоритмом
  const bytes = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv });
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);

  // записуємо дешифрований текст у файл
  fs.writeFileSync(filename, plaintext);
}
