"use strict";
const chinaName = 'Китай';
const chinaCost = 100;
const chilyName = 'Чили';
const chilyCost = 250;
const australiaName = 'Австралия';
const australiaCost = 170;
const indiaName = 'Индия';
const indiaCost = 80;
const jamaicaName = 'Ямайка';
const jamaicaCost = 120;
var result = prompt("Укажите страну");
switch(result.toUpperCase()) {
    case chinaName.toUpperCase():
        console.log(`Доставка в ${chinaName} будет стоить ${chinaCost} кредитов`);
        break;
    case chilyName.toUpperCase():
        console.log(`Доставка в ${chilyName} будет стоить ${chilyCost} кредитов`);
        break;
    case australiaName.toUpperCase():
        console.log(`Доставка в ${australiaName} будет стоить ${australiaCost} кредитов`);
        break;
    case indiaName.toUpperCase():
        console.log(`Доставка в ${indiaName} будет стоить ${indiaCost} кредитов`);
        break; 
    case jamaicaName.toUpperCase():
        console.log(`Доставка в ${jamaicaName} будет стоить ${jamaicaCost} кредитов`);
        break;
    default:
        console.log('В вашей стране доставка не доступна');
}
