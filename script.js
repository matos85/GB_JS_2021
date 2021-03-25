/*
1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?

Ответ:
Инкремент
«Префиксная форма»:
    с равно 2 потому как а+а=1+1=2, иначе выражение c = ++a; alert(c) означает сначала увеличь значение
        затем верни полученное значение.

«постфиксная форма»:
        d равно 1 потому как выражение d = b++; alert(d) означает сначала верни имеющееся/старое значение а потом увеличь его на
        величину b
____________________________________________________________________

с= 5 так как к предидущему значению а(а=2 после выполнения кода выше) прибавили 1(исходное значение а=1) и сложили с 2
d равно 4 так к 2 прибавли новое значение d полученное на предидщем шаге. оно стало равным 2 после вывода
 */

/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

Ответ:
      х будет равен 5 . x = 1 + (2 *= 2) =  1 + (2 * 2)
*/

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
 Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
//
// let a = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
// b = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
// // a=0
// // b=0
// alert('Задача №3')
//
// if (a > 0 && b > 0) c = a - b;
// else if (a < 0 && b < 0) c = a * b;
// else if (a > 0 && b < 0 || a < 0 && b > 0 || (a == 0 || b == 0)) c = a + b;
//
//
// alert('Переменна а равна: ' + a)
// alert('Переменна b равна: ' + b)
// alert('Результат: ' + c)

/*
4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
 */


//  function genRangeNumber(num){
//      let i=''
//      for (num; num<16; num++) {
//          i = i + String(num) + ', ';
//      }
//      return i
//
//  }
//
// let a = Math.floor(Math.random() * (15 + 1))
// alert(a)
//
//
// // а так делать можно? я имею ввиду код ниже с учетом закоментиорваных строк?
// // или просто не имеет смысла в боевой ситуации?
// switch (a) {
//     case a:
//         alert(genRangeNumber(a));
//         break;
//     // case 1:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 2:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 3:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 4:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 5:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 6:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 7:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 8:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 9:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 10:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 11:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 12:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 13:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 14:
//     //     alert(genRangeNumber(a));
//     //     break;
//     // case 15:
//     //     alert(genRangeNumber(a));
//     //     break;
//     default:
//         alert(genRangeNumber(a));
// }


/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */

// function arifmOperation(one=0, two=0){
//     let res1, res2, res3, res4
//
//     res1 = one + two;
//     res2 = one - two;
//     res3 = one * two;
//     if (two!=0) res4 = one / two;
//     else res4 = 'Делить на 0 запрещено'
//
//     return 'Сумма переменых: '+res1+'\n'+'' +
//            'Разность переменных: '+res2+'\n'+'' +
//            'Произведение переменных: '+res3+'\n'+
//            'Деление переменых: ' +res4+'\n';
// }
//
// one1= Number(prompt("Введите первое число"))
// one2= Number(prompt("Введите второе число"))
// alert(arifmOperation(one1, one2))

/*6. Реализовать функцию с тремя параметрами:
function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
 operation – строка с названием операции. В зависимости от переданного значения операции
 выполнить одну из арифметических операций (использовать функции из пункта 5) и
  вернуть полученное значение (использовать switch).
*/

// function arifmOperation(one=0, two=0, operator='+'){
//     switch (operator) {
//         case '+':
//             return 'Сумма переменых: '+ (one + two);
//         case '-':
//             return 'Разность переменных: '+ (one - two);
//         case '*':
//             return 'Произведение переменных: '+ one * two;
//         case '/':
//             if (two != 0) return 'Деление переменых: ' +one / two;
//             else return'Делить на 0 запрещено'
//     }
//
// }
//
// one = Number(prompt("Введите первое число"))
// two = Number(prompt("Введите второе число"))
// operator = (prompt("Введите действие.\n +,-,*,/"))
// alert(arifmOperation(one, two, operator ))

/*
7. *Сравнить null и 0. Попробуйте объяснить результат.


Ответ:
    предполагаю что дело в алгоритме который пытается оптимизировать расчет
null > 0; // false
null == 0; // false
null >= 0; // true
null <= 0; // true

 */
/*
8. *С помощью рекурсии организовать функцию возведения числа в степень.
 Формат: function power(val, pow), где val – заданное число, pow – степень.
 */