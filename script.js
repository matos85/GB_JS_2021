/*
1. Написать функцию, преобразующую число в объект.
 Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
 в котором в соответствующих свойствах описаны единицы, десятки и сотни.
 Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
 Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

let obj = {
    units: 0,
    dozens: 0,
    hundreds: 0,
    res: '',
    myRaise: function myRaise(obj, unit, dozen, hundred) {
        this.units += unit;
        this.dozens += dozen;
        this.hundreds += hundred;
        this.res = String(obj.hundreds) + obj.dozens + obj.units;
        if (this.res.length > 3) {
            console.log('Так делать не хорошо');
            return {}
        }
        return this.res
    }
};

console.log(obj.myRaise(obj, 9, 9, 9));

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

let cart = {
    products: [
        ['Товар 1', 100, 15],
        ['Товар 2', 150, 10],
        ['Товар 3', 1000, 11]
    ],

    countBasketPrice: function countBasketPrice() {
        let Price = 0;
        for (let i = 0; i < this.products.length; i++) {
            Price = Price + this.products[i][1] * this.products[i][2];
        }
        return Price;
    }
}

console.log(cart.countBasketPrice())
