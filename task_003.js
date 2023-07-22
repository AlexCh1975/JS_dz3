/**
 * Задание 3
    Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 */


const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
const num3 = Number(prompt('Введите третее число'));

function getMaxNumber(num1, num2, num3){
    let max = num1;
    if (num2 > max){
        max = num2;
    }
    if (num3 > max){
        max = num3;
    }

    return(max);
}

console.log(getMaxNumber(num1, num2, num3));