/**
 * Задание 1
    Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
 */

function exponentiation(num1, num2){
    return Math.pow(num1, num2);
}

console.log(exponentiation(2, 3));
console.log(exponentiation(3, 3));