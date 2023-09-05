// let student1 = {
//     name: "Ale",
//     umur: 28,
//     programmingLanguage: ["PHP", "C#", "C++", "Javascript", "Golang", "Java"]
// }

// let student2 = {
//     name: "Yoga",
//     umur: 35,
//     programmingLanguage: ["Love", "Javascript"]
// }

// let student3 = {
//     name: "Fadlan",
//     umur: 8,
//     programmingLanguage: ["India", "Javascript"]
// }

// constructor function
function StudentFSW(name, age, programmingLanguage){
    this.name = name,
    this.age = age,
    this.programmingLanguage = programmingLanguage
}

// inisialisasi object
var student1 = new StudentFSW("Hafizh", 20, ["Java"])
var student2 = new StudentFSW("Adrian", 40, ["Javascript"])
var student3 = new StudentFSW("Diki", 18, ["Physical Touch"])


console.log(student2)