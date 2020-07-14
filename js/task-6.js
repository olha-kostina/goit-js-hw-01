"use strict";
var total = 0;
do {
    var imput = prompt("Укажите число");
    total = Number(total) + Number(imput);
} while(imput !== null);
console.log(total);