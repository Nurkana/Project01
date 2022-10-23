// task 1

// function num(a){
//     return Math.pow(a, 3)
// }

// let x = +prompt()
// console.log(num(x));



// task 2

// function num(a, b, c){
// console.log((a-b)/c);
// }
// num(20,10,2)



// task 3

// function one(a){

//         if(a==1){
//         console.log("Понедельник");
//     }
//     else if(a==2){
//         console.log("Вторник");       
//     }
//     else if(a==3){
//         console.log("Среда");
//     }
//     else if(a==4){
//         console.log("Четверг");
//     }
//     else if(a==5){
//         console.log("Пятница");
//     }
//     else if(a==6){
//         console.log("Суббота");
//     }
//     else if(a==7){
//         console.log("Суббота");
//     } else{
//     console.log("число неверное");
//     }
    
// }
// one(prompt())


// task 4
// function num(a){
//     console.log(Math.pow(a,2));
// }
// let x = prompt()
// num(x)




// task 5
//  function num(a, b, c){
//     a = b;
//     b = c;
//     console.log(a, b);
// }
// let x = +prompt()
// let y  = +prompt()
// c = x
// num(x, y, c)




// task 6
// function num(a){
//     if(a % 2 ==0){
//         console.log("Заданное число четное");
//     }else{
//         console.log("Заданное чило нечетное");
//     }
// }
// let x = +prompt()
// num(x)






// task 7
// function maxNum(a) {
//     for(i = 0; i < x.length; i++) {
//         a[i] = +x[i]
//         if(max < x[i]) {
//             max = +x[i]
//         }
//     }

//     return max
// }

// let x = prompt("Введите числа через пробел:")
// x = x.split(" ")
// let max = x[0]

// console.log("вы ввели: " + x.join(", "));
// console.log("Максимальное значение: " + maxNum(x));





// // task 8
// function num(a, b){
//     return a + b
// }
// let x = +prompt()
// let y = +prompt()
// console.log(num(x, y));



// task 9
// function minNum(a) {
//     for(i = 0; i < x.length; i++) {
//         x[i] = +x[i]
//         if(min > x[i]) {
//             min = +x[i]
//         }
//     }

//     return min
// }

// let x = prompt("Введите числа через пробел:")
// x = x.split(" ")
// let min = x[0]

// console.log("вы ввели: " + x.join(", "));
// console.log("Минимальное значение: " + minNum(x));



// task 10
// function num(a){
//    if(x.length > 3){
//     console.log('количество значений больше 3-ёх');
//    }else{
//     console.log("Вы ввели " + x);
//    }
//    for(i of a){
//     if(maxNum < +i){
//         maxNum = +i
//     }
//    }
//    console.log("Максимальное число " + maxNum);
// }
// let x = prompt()
// x = x.split(" ")
// let maxNum = 0
// num(x)




// task 11
// let myFunction = (text) => {
//     for(let i = 0; i < 5; i++) {
//         document.write(`<h1> ${i + 1}) ${text} </h1>`)
//     }
// }

// myFunction("Decode")





// task 12
// let a = prompt("Введите числа:")
// a = a.split(" ")

// console.log(`Вы ввели: ${a.join(", ")}`);

// let all = (arr) => {
//     let sum = 0;
//     for(let item of arr) {
//         sum += +item
//     }

//     console.log(`Сумма всех чисел  равна: ${sum}`);
// } 
// all(a)




// task 13

// let a = prompt("Введите любое предложение:")
// a = a.split(" ")

// console.log(`Вы ввели: '${a.join(" ")}'`);

// let b = prompt("Какую букву хотите проверить?:")

// let check = (str, letter) => {
//     let filter = 0;

//     for(let i in str) {
//         for(let index in str[i]) {
//             if(letter == a[i][index]) {
//                 filter++
//             }
//         }
//     }
//     console.log(`Количество буквы '${letter}' = ${filter}`); 
// }
// check(a, b)






// task 14

// let x = prompt()
// x = x.split(" ")
// console.log(`Вы ввели: ${x.join(" ")} `);

// function num(arr){
//     let sum = 0
//     let middle = 0
//     for(let item of arr){
//         sum += +item
//     }
//     middle = sum / arr.length
//     console.log(`Среднее арифметическое равно: ${middle}`);
// }
// num(x)


// task 15

// let array = prompt("Введите числа через пробел:")
// array = array.split(" ")


// let check = (arr) => {
//     let max = arr[0]
//     let min = arr[0]

//     for(let item of arr) {
//         if(max < +item) {
//             max = +item
//         }

//         if(min > +item) {
//             min = +item
//         }
//     }

//     console.log(`Максимальное число: ${max}; Минимальное число: ${min}`);
// }

// check(array)








// task 16

// let a = prompt("Введите любые числа через пробел:")
// a = a.split(" ")

// const check = (arr) => {
//     let b = []
//     let c = []

//     for(let item of arr) {
//         if(+item > 0) {
//             b.push(+item)
//         }
//         else if(+item < 0) {
//             c.push(+item)
//         }
//     }

//     console.log(`Положительные числа: '${b.join(", ")}'; Отрицательные числа: '${c.join(", ")}'`);
// }
// check(a)







// task 17

// let txt = prompt("Введите всё, что угодно текстом:")

// function lengthString(text) {
//     text = text.split(" ")
//     let maxLength = text[0]

//     for(let item of text) {
//         if(item.length > maxLength.length) {
//             maxLength = item
//         }
//     }
//     console.log(`Самое длинное слово: ${maxLength}`);
// }
// lengthString(txt)





// task 18

// let a = prompt()
// a = a.split(" ")

// function EvensAndOdds(arr) {
//     let even = 0
//     let odd = 0
//     for (let item of arr) {
//         if (+item % 2 == 0) {
//             even++
//         }
//         else {
//             odd++
//         }
//     }
//     console.log(`odd: ${odd} Even: ${even}`);
// }

// EvensAndOdds(a)







// task 19

// let month = +prompt("Введите число месяца(от 1 до 12):")

// let check = (season) => {
//     if(season >= 1 && season <= 3) {
//         console.log("Зима");
//     }
//     else if(season >= 4 && season <= 6) {
//         console.log("Весна");
//     }
//     else if(season >= 7 && season <= 9) {
//         console.log("Лето");
//     }
//     else if(season >= 10 && season <= 12) {
//         console.log("Осень");
//     }
//     else {
//         console.log("Вы ввели неправильно.");
//     }
// }

// check(month)






// task 20

// const films = [
//     {
//         name: "Джон Уйк",
//         ganre: "Боевик",
//         year: 2015
//     },
//     {
//         name: "Типа копы",
//         ganre: "Комедия",
//         year: 2014
//     },
//     {
//         name: "1+1",
//         ganre: "Драма",
//         year: 2011
//     },
//     {
//         name: "Виноваты звезды",
//         ganre: "Мелодрама",
//         year: 2014
//     }
// ]

// function filterFilm(arr, g){
//     for(let item of arr){
//         if(item.ganre == g){
//             console.log(item.name);
//         }
//     }
// }
// filterFilm(films, "Комедия")


// function filterFilmm(arr, g){
//     for(let item of arr){
//         if(item.year >= g){
//             console.log(item.name);
//         }
//     }
// }
// filterFilmm(films, 2014)





// task 21

// const users = [
//     {
// 		login: "«alice19»",
// 		password: "«alice19»",
// 		name: ""
// 	},
// 	{
// 		login: "richard18",
// 		password: "richard18",	
// 		name: "Richard"
// 	},
// 	{
// 		login: "sam22",
// 		password: "",
// 		name: "Sam"
// 	}
// ]
// function changeValue(user, key, value){
//     user[key] = value
// }
// changeValue(users[0], "name", "Richard")
// changeValue(users[1], "password", "asd")
// changeValue(users[2], "login", "Decode")
// console.log(users);






// task 22
// let x = +prompt()
// function num(a){
//     let arr = []
//     for(let i = 0; i <= a; i++){
//         if(a % i == 0){
//             arr.push(i)
//         }
//     }
//     console.log(arr);
// }
// num(x)
