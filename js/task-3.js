"use strict";
const ADMIN_PASSWORD = '180192';
let message;
var result = prompt("Введите пароль: ");
if(result === null) {
    message = 'Отменено пользователем!';
} else if (result === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
console.log(alert(message));