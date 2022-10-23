


// Task 1

// let a = prompt("Введите цифры через пробел:")
// a = a.split(" ")

// for(i of a) {
//     console.log(i);
// }



// Task 2

// let multi = 1;
// let a = prompt("Введите цифры через пробел:");
// a = a.split(" ");

// for(item of a) {
//     multi *= (item);
    
// }

// console.log(multi);



// Task 3

// let a = prompt("Введите цифры через пробел:")
// a = a.split(" ")

// for(let i of a) {
//     if(i > 3 && i < 10) {
//         console.log(i);
//     }
// }



// Task 4

// let sum = 0;
// let a = prompt("Введите цифры через пробел:");
// a = a.split(" ")

// console.log(a);

// for(let i of a) {
//     if(+i > 0) {
//         sum += +i
//     }
// }

// console.log(sum);



// Task 5

// let a = prompt("Введите цифры через пробел:")
// a = a.split(" ")

// for(let i of a) {
//     if(+i == 4) {
//         console.log("В введенных числах есть 4, вот это удача.");
//         break
//     }
// }



// Task 6

// let a = prompt("Введите дни недели через пробел:")
// a = a.split(" ")

// document.write(`<ul>`)

// for(let i of a) {
//     if(i == "суббота" || i == "воскресенье") {
//         document.write(`<li> <b> ${i} </b> </li>`)  
//     }
//     else {
//         document.write(`<li> ${i} </li>`)  
//     }
// }

// document.write(`</ul>`)



// Task 7

// let a = [1, 2, 3, 4, 5]
// a = a.slice(0, 3)

// console.log("Первые 3 эллемента: " + a);



// Task 8

// let a = [1, 2, 3, 4, 5]
// a = a.slice(3, 5)

// console.log("Последние 2 эллемента: " + a);



// Task 9

// let a = [1, 2, 3, 4, 5]
// a.splice(1, 2)

// console.log(a);



// Task 10

// let a = [1, 2, 3, 4, 5]
// a.splice(0, 1);
// a.splice(3, 1);

// console.log(a);



// Task 11

// let a = [1, 2, 3, 4, 5]
// a.splice(3, 0, "a", "b", "c");

// console.log(a);



// Task 12

// let a = [1, 2, 3, 4, 5]
// a.splice(1, 0, "a", "b");
// a.splice(6, 0, "c");
// a.splice(8, 0, "e");

// console.log(a);



// Task 13

// let a = prompt("Введите всё что угодно:")
// a = a.split("")
// a.reverse()
// a = a.join("")
// console.log(a);  



// Task 14

// let a = prompt("Введите что-нибудь через пробелы:")
// a = a.split(" ")
// a = a.join(", ")

// document.write(`<h1> ${a} </h1>`)



// Task 15

// let b = []
// let a = prompt("Введите что-нибудь через пробелы:")
// a = a.split(" ")

// for(i = a.length - 1; i >= 0; i--) {
//     b.push(a[i])
// }

// console.log(b.join(" ")); 



// Task 16

// let sum = 0;
// let a = prompt("Введите числачерез пробел:");
// a = a.split(" ")

// console.log(a);

// for(i of a) {
//     sum += +i
// }

// console.log(sum);



// Task 17

// let sum = 0;
// let max = 5;
// let index 
// let a = prompt("Введите числа через пробел(не больше 5 чисел):")
// a = a.split(" ")

// console.log("Вы ввели: " + a.join(", "));

// if(max <= a.length ) {
//     index = a.length - 1;
//     index = index - 4;
//     console.log(index);
//     a.splice(5, index)

//     console.log("Вы ввели больше 5 чисел. Вот какие 5 чисел суммируются в итоге: " + a.join(", "));
// }

// for(i of a) {
//     sum += +i
// }

// console.log("Сумма всех чисел: " + sum);



// Task 18

// let a = prompt("Введите всё что угодно:")
// a.split(" ")

// let b = "b"
// b = +b
// console.log(typeof b);
// console.log(b);



// Task 19

// let a = ["1)Melon", "2)Kiwi", "3)Apple", "4)Banana", "5)Orange"]

// alert("Это список продуктов: " + a.join(", "))
// console.log("Это список продуктов: " + a.join(", "));

// let b = prompt("Какой продукт или продукты хотите удалить(введите места по числам через дефис без пробелов):")
// b = b.split("-")

// if(b[0] == "1" && b[1] == "5") {
//     console.log("Теперь список пуст");
// }
// else if(b.length == 2) {
//     a.splice(b[0] - 1, b[1] )
//     console.log("Список выглядет так: " + a);
//     document.write(`<h1> Список выглядет так: ${a.join(", ")} </h1>`)
// }
// else if(b.length == 1 && +b <= 5) {
//     a.splice(b - 1, 1)
//     console.log("Список выглядет так: " + a);
//     document.write(`<h1> Список выглядет так: ${a.join(", ")} </h1>`)
// }
// else{
//     alert("Вы ввели неправильно.")
// }



// Task 20

// let arr = prompt("Введите числа через пробел:")
// arr = arr.split(" ")
// let max = arr[0]

// console.log("Вы ввели вот такие цифры: " + arr.join(", "));

// for(i in arr) {
//     if(+arr[i] > max) {
//         max = arr[i]
//     }
// }

// console.log("Максимальное значение: " + max);



// Task 21

// let a = prompt("Введите числа через пробел:")
// a = a.split(" ")
// let sum = 0;
// let X
// let b = []

// console.log("Вы ввели: " + a.join(", "));

// if(a.length == 1) {
//     console.log("Вы ввели только одно число!");
// }

// for(i of a) {
//     sum += +i
// }

// console.log(sum);

// X = sum / a.length
// console.log("X = " + X);

// for(i in a) {
//     if(X > a[i]) {
//         b.push(a[i])
//     }
// }

// if (b.length == 1) {
//     console.log("Это число меньше среднего арифметического: " + b.join(", "));
// }
// else if(b.length > 1) {
//     console.log("Эти числа меньше среднего арифметического: " + b.join(", "));
// }



// Task 22

// let a = prompt("Введите числа через пробел:")
// a = a.split(" ")

// console.log("Вы ввели: " + a.join(", "));

// let max = a[0]

// for(i = 0; i < a.length; i++) {
//     if(max < +a[i]) {
//         max = +a[i]
//     }
// }

// for(i in a) {
//     if(max == a[i]) {
//         max = i
//     }
// }

// a.splice(max, 1)
// console.log("max = " + max);

// let min = a[a.length - 1]

// for(i = a[a.length - 1]; i >= 0; i--) {
//     if(min > +a[i]) {
//         min = +a[i]
//     }
// }

// for(i in a) {
//     if(min == a[i]) {
//         min = i
//     }
// }

// a.splice(min, 1) 
// console.log("min = " + min);

// console.log(a.join(", "));



// Task 23

// let a = prompt("Введите числа через пробел:")
// a = a.split(" ")

// console.log("Вы ввели: " + a.join(", "));

// for(i = 0; i < a.length; i++) {
//     if(+a[i] < 0) {
//         a.splice(i, 1)
//         i--
//     }
// }

// console.log("Вот все положительные числа: " + a.join(", "));



// Task 24

// let pos
// let a = [1, 2, 7, 8, -11, -5, 6]
// alert(a.join(", "))
// console.log(a.join(", "));

// let b = prompt("Введите число, у которого хотите узнать позицию:")

// for(i = 0; i < a.length; i++) {
//     if(b == a[i]) {
//         pos = i
//     }
//     else if(!b) {
//         "Вы не ввели ничего!"
//     }
//     else if(b != a[i]) {
//         console.log("Вы ввели не соответсвующее значение");
//     }
// }

// console.log("Число = " + b + "; Позиция = " + pos);



// Task 25

// let odd = []
// let even = []       
// let a = prompt("Введите числа через пробел:")
// a = a.split(" ")

// console.log("Вы ввели: " + a.join(", "));

// for(i = 0; i < a.length; i++) {
//     if(+a[i] % 2 == 0) {
//         even.push(a[i])
//     }
//     else {
//         odd.push(a[i])
//     }
// }

// console.log("Все четные числа: " + even.join(", ") + "; Все нечетные числа: " + odd.join(", "));
















// let a = [1, 2, 3, 4, 5]
// document.write("<ul>")
// for(let i of a){
//     document.write(`<li> ${a[i] * 10} </li>`)
// }

// document.write("</ul>")




// let a = prompt()
// a = a.split(" ")
// let even = []
// let odd = []
// for(let i of a){
//     if(i % 2 ==0){
//         even.push(+i)
//     }else{
//         odd.push(+i)
//     }
// }
// console.log(even, odd);




// let a = prompt()
// a = a.split(" ")
// let max = +a[0]
// let min = +a[0]
// for(let i in a){
//     if(+a[i] > max){
//         max = +a[i]
//     }
//     if(+a[i] < min){
//         min = +a[i]
//     }
// }
// for(let x of a){
//     if(+x != max && +x != min){
//         console.log(+x);
//     }
// }





//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

// let a = [1, 2, 3, 4, 5]
// console.log(a.reverse); вариант-1 // reverse работает только с массивами.
 
// let a = prompt() // 12345; Вариант-2 
// a = a.split("") //[ "1", "2", "3", "4", "5"]
// a = a.reverse() // ["5", "4", "3", "2", "1"]
// a = a.join("") //54321
// console.log(a);