"use strict";
const credits = 23580;
const pricePerDroid = 3000;
var result = prompt("Укажите количество дроидов: ");
var totalPrice;
if (result === null) {
    totalPrice = 'Отменено пользователем!';
} else if ((result * pricePerDroid)> credits) {
    totalPrice = 'Недостаточно средств на счету!';
} else {
    totalPrice = `Вы купили ${result} дроидов, на счету осталось ${credits - (result * pricePerDroid)} кредитов.`;
}
console.log(totalPrice);