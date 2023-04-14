// Функція для читання вмісту файлу та виведення його значення на екран

const fs = require('fs');

function read_file(file_path) {
  fs.readFile(file_path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

read_file('hello.txt');

// Функція для створення файлу з певним контентом

const fs = require('fs');

function create_file(file_path, file_contents) {
  fs.writeFile(file_path, file_contents, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${file_path} was successfully created.`);
  });
}

create_file('new.txt', 'new text');

// Функція для додавання вмісту до раніше створеного файлу

const fs = require('fs');

function append_file(file_path, file_contents) {
  fs.appendFile(file_path, file_contents, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${file_path} was successfully updated.`);
  });
}

appendingContent('hello.txt', 'content that you want to take');

// Функція для видалення файлу з диску

const fs = require('fs');

function delete_file(file_path) {
  fs.unlink(file_path, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log(`File ${file_path} does not exist.`);
      } else {
        console.error(err);
      }
      return;
    }
    console.log(`File ${file_path} was successfully deleted.`);
  });
}

delete_file('new.txt');

// Функція для перенесення файлу з однієї папки на диску в іншу

const fs = require('fs');

function move_file(src_path, dst_path) {
  fs.rename(src_path, dst_path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File moved from ${src_path} to ${dst_path}.`);
  });
}

transferFile('./hello.txt', './new/hello.txt');