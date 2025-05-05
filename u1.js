'use strict';
// Über eine Schleife soll folgende Zahlenfolge ausgegeben werden:
// 6,12,18,24,36,48,54
let array = []; 
for (let i = 6; i <= 54; i+=6) {
    if (i !== 30 && i !== 42) {
        array.push(i)
    }
}
console.log(array)
 