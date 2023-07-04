const assert = require('assert');

function greet(
  person: string,
  message: string,
  emojeeCount: number,
  shouldCapitalisePerson: boolean
) {
  assert(typeof person === 'string' && person !== '');

  const emojees = '🎉'.repeat(emojeeCount);
  const capitalisedName = shouldCapitalisePerson
    ? person.toUpperCase()
    : person;
  console.log(`Hi ${capitalisedName}! ${message} ${emojees}`);
}

greet('john', 'Welcome to typescript', 5, true);
greet('go', 'Welcome', 5, true);
// greet(10, 'Welcome to typescript', 5, true);
// greet();

// Typescript is inferncing the type from the literal supplied.
const PI = 3.142;
let title = 'This is a title'; // title is string
let canClose = false;
canClose = true;

let canReveal: boolean;

canReveal = 1 > 0;

const numbers = [1, 2, 3, 'one', 'two']; // type[] number[], string[]  (string | number)[]
// numbers.push(true);
// Union types are compounds of various types put together, the value of such a variable can be
// one among the types participating in the union

let stringOrNumber: string | number = 10;
stringOrNumber = 'Title';

// function return value is supplied after the signature of the function
function findLength(items: string[] | string | number): number {
  if (typeof items === 'string' || Array.isArray(items)) {
    return items.length;
  } else {
    return items;
  }
}

const integers = [1, 2, 3, 4, 5];
integers.forEach((item: number) => console.log(item));

const student = {
  name: 'Chuck',
  age: 19,
};

console.log(student.name);

// function displayStudent(student: { name: string; age: number }) {
//   console.log(student.name, ' ', student.age);
// }

function displayStudent(student: { name: string; age: number }) {
  console.log(student.name, ' ', student.age);
}

// function displayStudent(student: {name:string, age:number}) {
//   console.log(student.name, ' ', student.age);
// }

displayStudent(student);

class Student {
  name: string;
  age: number;
  college: string;
  constructor(name: string, age: number, college: string) {
    this.name = name;
    this.age = age;
    this.college = college;
  }
}

const anotherStudent = new Student('John', 20, 'abc college');

// We can pass objects of different types here, because Typescript allows
// structural typing. And type equivalance is done structurally.
displayStudent(anotherStudent);

type StudentType = { name: string; age: number };

function processStudent(student: StudentType) {
  console.log('processing student');
}

type StingOrNumber = string | number;
