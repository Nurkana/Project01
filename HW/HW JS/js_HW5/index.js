

// Task 1

// const city = {
//     name: "Berlin",
//     location: "Germany"
// }

// city.name = "London"
// console.log(city.name);


// Task 2

// let sum = 0;
// const obj = [
//     {
//         name: "Петя",
//         salary: 200
//     },
//     {
//         name: "Коля",
//         salary: 1000
//     },
//     {
//         name: "Вася",
//         salary: 500
//     }
// ]

// for(let i in obj) {
//     sum += obj[i].salary
// }

// console.log(sum);






const students = [
    {
        name: "Nurailym",
        surname: "Khudaibergenkyzy",
        age: 18,
        grade: 100
    },
    {
        name: "Aray",
        surname: "Ratbek",
        age: 19,
        grade: 90
    },
    {
        name: "Nurgeldy",
        surname: "Amangeldi",
        age: 17,
        grade: 78
    },
    {
        name: "Nurdaulet",
        surname: "Kairat",
        age: 20,
        grade: 70
    },
    {
        name: "Anel",
        surname: "Murzabekova",
        age: 19,
        grade: 90
    },
    {
        name: "Akmaral",
        surname:"Karazhanova",
        age: 18,
        grade: 85
    },
    {
        name:"Akerke",
        surname:"Kialyn",
        age: 17,
        grade: 80
    },
    {
        name:"Tomiris",
        surname:"Zhunusova",
        age: 20,
        grade: 75
    },
    {
        name:"Aziza",
        surname: "Zhumabek",
        age: 19,
        grade: 90
    },
    {
        name:"Moldir",
        surname: "Zhumabek",
        age: 19,
        grade: 95
    }
]




// Task 3

// for(i = 0; i < students.length; i++) {
//      if(students[i].age >=19){
//      console.log(students[i]["name"])
// }

// console.log(students);



// Task 4

// for(i = 0; i < students.length; i++) {
//     if(students[i].grade <= 100 && students[i].grade >= 85) {
//         console.log(students[i]["name"]);
//     }
// }






const student = [
    {
        name: "Nurailym",
        surname: "Khudaibergenkyzy",
        age: 18,
        gpa: 5.0
    },
    {
        name: "Aray",
        surname: "Ratbek",
        age: 21,
        gpa: 4.75
    },
    {
        name: "Nurgeldy",
        surname: "Amangeldi",
        age: 17,
        gpa: 3.00
    },
    {
        name: "Nurdaulet",
        surname: "Kairat",
        age: 22,
        gpa: 2.55
    },
    {
        name: "Anel",
        surname: "Murzabekova",
        age: 23,
        gpa: 4.75
    },
    {
        name: "Akmaral",
        surname:"Karazhanova",
        age: 18,
        gpa: 4.25
    },
    {
        name:"Akerke",
        surname:"Kialyn",
        age: 17,
        gpa: 4.25
    },
    {
        name:"Tomiris",
        surname:"Zhunusova",
        age: 22,
        gpa: 3.5
    },
    {
        name:"Aziza",
        surname: "Zhumabek",
        age: 21,
        gpa: 4.75
    },
    {
        name:"Moldir",
        surname: "Zhumabek",
        age: 19,
        gpa: 4.95
    }
]




// Task 5

// for(let key in students) {
//     console.log(students[key]);
// }



// Task 6
// a)

// for(i = 0; i < studentt.length; i++) {
//     if(student[i].name[0] == "A") {
//         console.log(student[i]["name"]);
//     }
// }


// b) и с)

// let sum = 0;
// let X = 0;

// for(i = 0; i < student.length; i++) {

//     sum += +student[i]["gpa"]

//     if(student[i].gpa >= 3.0) {
//         console.log(student[i]["name"] + ": " + student[i]["gpa"]);
//     }
// }

// X = sum / student.length

// console.log("Среднее значение 'gpa' у студентов: " + X);


// d)

// for(i = 0; i < student.length; i++) {
//     if(student[i]["age"] >= 21) {
//         console.log(student[i]["name"] + ": " + student[i]["age"]);
//     }
// }



// Task 7 

const employees = [
    {
        salary: 190000,
        name: "Alice",
        deadline: true
    },
    {
        salary: 90000,
        name: "Richard",
        deadline: true
    },
    {
        salary: 240000,
        name: "Sam",
        deadline: false
    }
   ]


// let max = employees[0]["salary"]
// let maxName 
// let min = employees[0]["salary"]
// let miName

// for(i = 0; i < employees.length; i++) {
//     if(employees[i]["salary"] > max) {
//         max = employees[i]["salary"]
//         maxName = employees[i]["name"]
//         i--
//     }

//     if(employees[i]["salary"] < min) {
//         min = employees[i]["salary"]
//         minName = employees[i]["name"]
//         i--
//     }

//     if(employees[i]["salary"] <= 100000) {
//         employees[i]["salary"] += 20000
//         console.log("Этому сотруднику прибавилось + 20000 к зарплате: " + employees[i]["name"] + ". Сейчас его зарплата: " + employees[i]["salary"]);
//     }
// }

// console.log("Сотрудника с максимальной зарплатой " + maxName + ": " + max);
// console.log("Сотрудника с минимальной зарплатой " + minName + ": " + min);



// Task 8


// const users = [
//     {
//         login: "Alicell@gmail.com",
//         name: "Alice",
//         password: ""
//     },
//     {
//         login: "Richard19",
//         name: "Richard",
//         password: "Richard21"
//     },
//     {
//         login: "SamuelJackson@mail.com",
//         name: "Sam",
//         password: "sam189623"
//     },
//     {
//         login: "",
//         name: "Chloe",
//         password: "Chloebeauty18"
//     },
//     {
//         login: "SteveMineCraftLOVE@mine.craft",
//         name: "Steve",
//         password: "minecraft1.5"
//     }
// ]

// for(i = 0; i < users.length; i++) {
//     for(let key in users[i]) {
//         if(users[i][key] == "") {
//             console.log("Пользователь " + users[i]['name'] + " был удалён из базы данных. Так как не был заполнен один из параметров.");
//             delete users.splice(i, 1)
//         }
//     }
// }




