var number = [45, 49, 50, 55, 60, 65];

// 1. get elements by index..........
console.log(number[3]);

// another way of finding elements.....
var elements = number[2];
console.log(elements);

// 2. set elements value by index..................................
// amra var elements er man ke change ba onno kichu set korte pari....like.....
number[1] = 66;
number[4] = 77;
console.log(number);
// ei vabe likhle 49 er jaigai 66 and 60 er jaigai 77 dekhabe output e.

// 3. find index of an elements.........................
var positionIndex = number.indexOf(50);
console.log(positionIndex);

// elements er vitore jodi kono ekta value na thake tahole output e -1 dekhabe. example...........
var positionIndex = number.indexOf(165);
console.log(positionIndex);
