var express = require('express');
var path = require('path');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер запущен по адресу: http://localhost:8080/');