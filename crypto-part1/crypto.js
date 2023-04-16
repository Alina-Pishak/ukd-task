// Функція для хешування паролю і зберігання його в файлі

const crypto = require('crypto');
const fs = require('fs');

function hashPassword(password) {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  fs.writeFile('passwords.txt', hash, (err) => {
    if (err) throw err;
    console.log('The password has been hashed and saved to the file');
  });
}
// Функція для порівняння рядка паролю з зашифрованим в файлі

const crypto = require('crypto');
const fs = require('fs');

function comparePassword(password) {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  fs.readFile('passwords.txt', 'utf8', (err, data) => {
    if (err) throw err;
    if (hash === data) {
      console.log('The password is correct');
    } else {
      console.log('The password is incorrect');
    }
  });
}

// Приклад використання функцій

hashPassword('my_password');
comparePassword('my_password');
comparePassword('wrong_password');
