"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Error!');
}


// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('many');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!'): console.log('Error!');

const num = 50;

switch (num) {
    case 49:
        console.log('Неверное');
        break;
    case 100:
        console.log('НЕА');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}