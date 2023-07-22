/**
 * Задание 4
    Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
    1. Сложение
    2. Разность
    3. Умножение
    4. Деление
    Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
 */

function getSum(num1, num2){
    return num1 + num2;
}

function getDifference(num1, num2){
    if (num1 > num2){
        return num1 - num2;
    }else if (num1 === num2){
        return 0
    }else{
        return num2 - num1;
    }
}

function getMultiply(num1, num2){
    return num1 * num2;
}

function getDivision(num1, num2){
    return num1 / num2;
}

console.log(getSum(3, 5));
console.log(getDifference(3, 5));
console.log(getMultiply(3, 5));
console.log(getDivision(3, 5));