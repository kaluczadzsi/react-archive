// import apiKey from './util.js';
// import { apiKey, abc as content } from './util.js';

// import * as util from './util.js';

// console.log(util.default);
// console.log(content);

// function greetUser(username, message = 'Hello!') {
//   return `Hi, I am ${username} ${message}`;
// }

// const res = greetUser('Max', 'nice to meet you');
// console.log(res);

// const returnObj = (num) => {
//   return { num };
// };

// console.log(returnObj(17));

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log('Hi my name is ' + this.name);
//   }
// }

// const user1 = new User('Max', 34);
// console.log(user1);
// user1.greet();

// console.log(user1.__proto__);

// class Guest extends User {}

// const guest1 = new Guest('guest', 66);

// console.log(guest1.greet());

// const hobbies = ['Sports', 'Cooking', 'Reading'];
// console.log(hobbies);

// hobbies.push('Working');
// console.log(hobbies);

// console.log(hobbies.findIndex((hobby) => hobby === 'Cooking'));

// console.log(hobbies.map((item) => item + '!'));

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// function transformToObjects(numberArray) {
//   return numberArray.map((item) => ({ val: item }));
// }

// console.log(transformToObjects([1, 2, 3]));

// const userNameData = ['Max', 'Schwarzmüller'];

// const [firstName, lastName, empty] = userNameData;

// console.log(firstName, lastName);

// const user = {
//   //   name: 'Max',
//   age: 34,
// };

// const { name: userName = 20, age } = user;

// console.log(userName);

// const hobbies = ['Sports', 'Cooking'];

// const newHobbies = ['Reading'];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: 'Max',
//   age: 34,
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

// const password = prompt('Your password');

// if (password === 'Hello') {
//   console.log('Hello works');
// } else if (password === 'hello') {
//   console.log('hello works');
// } else {
//   console.log('Access not granted.');
// }
