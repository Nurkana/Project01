// let x = +prompt();
// if(x % 2==0){
// console.log("введенное число четное")
// }
// else{
//     console.log("Введенное число нечетное")
// }
// task1


// let x = +prompt();
// if(x >= 0.1){
//     console.log("Число положительное")
// }
// else if(x == 0){
//     console.log("Введенное число нейтральное")
// }
// else{
//     console.log("Введенное число отрицательное")
// }
// task3




// let x = +prompt();
// if(x >= 21){
//     console.log("Поздравляю! Вы имеете право голосовать.")
// }
// else{
//     console.log("К сожалению Вы не можете голосовать")
// }
// task3



// let x = +prompt()
// if(x <=129.9){
//     console.log("Карликовый")
// }
// else if(x > 129.9 && x <=149.9){
//     console.log("Очень низкий")
// }
// else if(x > 149.9 && x <=159.9){
//     console.log("Низкий")
// }
// else if(x > 159.9 && x <=163.9){
//     console.log("Ниже среднего")
// }
// else if(x > 163.9 && x <=166.9){
//     console.log("Средний")
// }
// else if(x > 166.9 && x <=169.9){
//     console.log("Выше среднего")
// }
// else if(x >169.9 && x <=179.9){
//     console.log("Высокий")
// }
// else if(x >179.9 && x <=199.9){
//     console.log("Очень высокий")
// }
// else{
//     console.log("Гигант")
// }
// task4



// let x = +prompt()
// let z = +prompt()
// let y = +prompt()
// console.log(Math.max(x, z, y))
// task5



// let x = +prompt()
// if(x < 0){
//     alert("Морозная погода")
// }
// else if(x >= 0 && x <=10){
//     alert("очень холодная погода")
// }
// else if(x > 10 && x <=20){
//     alert("Холодная погода")
// }
// else if(x > 20 && x <=30){
//     alert("Нормальная температура")
// }
// else if(x > 30 && x <=39.9){
//     alert("Жарко")
// }
// else if(x >= 40){
//     alert("Очень жарко")
// }
// task6




// let x = +prompt();
// let z = +prompt();
// let y = +prompt();
// if(x + z + y == 180){
//     console.log("Треугольник действителен")
// }
// else{
//     console.log("Треугольник не действителен.")
// }
// task7


// let a = +prompt();
// let b = +prompt();
// let c = +prompt();
// if(a == b && a == c){
//     console.log("Треугольник действителен")
// }
// else if(b == a && b == c){
//     console.log("Треугольник действителен")
// }
// else if(c == a && c == b){
//     console.log("Треугольник действителен")
// }
// else{
//     console.log("Треугольник не действителен.")
// }
// task7 Вариант-2



// let x = prompt();
// if((x >= "a" && x <="z") ||
//    (x >= "A" && x <="Z") ||
//    (x >= "а" && x <="я") ||
//    (x >= "А" && x <="Я")
//    ){
//     console.log("Вы ввели букву")
// }
// else if(x >="0" && x <="9"){
//     console.log("Вы ввели цифру")
// }
// else{
//     console.log("Вы ввели символ");
// }
// task 8



// let x = prompt();
// if((x == "a") || (x == "e") ||
//    (x == "i") || (x == "o") ||
//    (x == "u") || (x == "y")
//    ){
//     console.log("Буква гласная")
//    }
//    else{
//     console.log("буква согласная");
//    }
//    task 9



// let x = prompt();
// if(x == "E"){
//     console.log("Excellent");
// }
// else if(x == "V"){
//     console.log("Very Good")    
// }
// else if(x == "G"){
//     console.log("Good")    
// }
// else if(x == "A"){
//     console.log("Average")     
// }
// else if(x == "F"){
//     console.log("Fail")    
// }
// task 10



// let x = +prompt();
// let z = +prompt();
// let object = Math.abs(x - z)
//  if(x <= 1 && z >= 3){
//      console.log(x + z)
//  }
//  else{
//      console.log(object)
//  }
// task 11



// let x = +prompt("Введите число");
// if(x >=0 && x <=14){
//     console.log("Первая четверть")
// }
// else if(x > 14 && x <= 30){
//     console.log("Вторая четверть");
// }
// else if(x > 30 && x <= 45){
//     console.log("Третья четверть");
// }
// else if(x > 45 && x <= 59){
//     console.log("четвертая четверть");
// }
// task 12



// let x = +prompt();
// let z = +prompt();
// let y = +prompt();
// console.log("Зарплата первого сотрудника" + x + ", Зарплаиа второго сотрудника" + z + ", Зарплаиа третьего сотрудника" + y);
// if((x < z && z < y) || (y < z && z < x)){
//     console.log("Разница в зарплате" + Math.abs(y - x));
// }
// else if((z < x && x < y) || (y < x && x < z)){
//     console.log("Разница в зарплате" + Math.abs(y - z));
// }
// else{
//     console.log("Разница в зарплате" + Math.abs(x -z));
// }
// task 13



// let x = +prompt("введите первое число");
// let y = +prompt("Введите второе число");
// if(x % 2 == 0 && y % 2 == 0){
//     console.log((x * y)**2)
// }
// else if(x % 2 == 0 || y % 2 == 0){
//     console.log((x / y) + (x * y));
// }
// else if(x % 2 > 0 && y % 2 > 0){
//     console.log(x + y);
// }
// task 14



// let x = +prompt("Введите первое число");
// let y = +prompt("Введите второе число");
// let z = +prompt("Введите третье число");
// if(x < y  && y < z ){
//     console.log(x=z, y=z, z=z);
// }
// else if(x > y && y > z){
//     console.log(x ** 2, y ** 2, z **2)
// }
// else{
//     console.log(x * (-1),   y * (-1),  z*(-1))
// }
// task 15



// let log = prompt("Введите свой логин");
// let pass= prompt("Введите свой пароль");

// let login = "admin"
// let password = "secret"
// if(log == login && pass == password){
//     console.log("Вы успешно авторизировались")
// }
// else if(log != login){
//     console.log("Пользователя с данным логином не зарегистрирован");
// }
// else if(pass!=password){
//     console.log("Вы неверно ввели пароль");
// }
// task 16



// let x = +prompt();
// if(x == 5 || x == 10 ||
//    x == 14 || x == 100){
//     console.log(x ** 3)
//    }
//    else{
//     console.log(Math.abs(x))
//    }
// task 17



// let x = +prompt();
// if(x % 11 == 0){
//     console.log(x + 20);
// }
// else if(x > 0 && x % 2==0){
//     console.log(x - 5);
// }
// else{
//     console.log(x ** 2);
// }
// task 18



// let x = +prompt();
// let y = +prompt();
// let z = +prompt();
// if(x < y && y < z){
//     console.log(y);
// }
// else if(x < z && z < y){
//     console.log(z);
// }
// else if(y < x && x < z){
//     console.log(x);
// }
// else if(y < z && z < x){
//     console.log(z);
// }
// else if(z < x && x < y){
//     console.log(x);
// }
// else if(z < y && y < x){
//     console.log(y);
// }
// task 19





// let x = +prompt("Введите первое число");
// let y = +prompt("Введите второе число");
// let z = +prompt("Введите третье число");

// let pos = 0;
// let neg = 0;
// if(x > 0){
//     pos++;
// }
// else{
//     neg++;
// }
// if(y > 0){
//     pos++;    
// }
// else{
//     neg++;
// }
// if(z > 0){
//     pos++;
// }
// else{
//     neg++;
// }
//  console.log("Положительных чисел. " + pos, ", Отрицательных чисел. " + neg);
// task 20



// let str = prompt ("Введите буквы");

// if (str[0]=='a') {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
// task 21




// let x = prompt ("Введите число");
// if (x[0] == 1 || x[0] == 2 || x[0] == 3) {
//     console.log("Да");
// } 
// else {
//     console.log("Нет");
// }
// task 22

