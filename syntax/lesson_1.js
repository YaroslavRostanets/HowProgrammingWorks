const myName = 'Yaroslav';
const YEAR = 1992;

const sayHi = (name) => console.log(`Привет, ${name}`);
sayHi('Anton');
sayHi(myName);
sayHi(YEAR);

const odd = [];
const all = [15, 30];

//Циклы

for (let i = 15; i<=30; i++) (i % 2) && odd.push(i);
console.log(odd.join(', '));

const cout = (start, end) => {
  const odd = [];
  for (let i = start; i<= end; i++) (i % 2) && odd.push(i);
  console.log(odd.join(', '));
};
cout(15, 30);

//Функции

const average = function (a = 0) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) sum += arguments[i];

  return sum / arguments.length
};
console.log(average(2, -2, 3));

const square = (x) => x*x;
console.log('square: ', square(3));

const cube = (x) => Math.pow(x, 3);
console.log('cube: ', cube(3));

for (let i = 0; i < 10; i++) {
  console.log('average', average(square(i), cube(i)));
}

//Обьекты
const OBJ = {
  name: 'Vlad'
};

let myObject = {
  name: 'Helga'
};

OBJ.name = 'Artem';
myObject = 'Anton';

myObject = {};
//OBJ = {};
//Значение констант не может быть изменено новым присваиванием

const createUser = (name, city) => ({
  name: name,
  city: city
});

console.log(createUser('Marcus Aurelius', 'Rome'));

//Массивы

const arr = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Yaroslav', phone: '+30650444455'}
  ];

let findPhoneByName = (name) => {
  for(const item of arr) {
    if (name === item.name) return item.phone
  }
  return undefined;
};

console.log(findPhoneByName('Yaroslav2'));

//Коллекции: хеш-таблицы (объекты)

const map = {
  mark: {name: 'Marcus Aurelius', phone: '+380445554433'},
  yarik: {name: 'Yaroslav', phone: '+30650444455'}
};

findPhoneByName = (map, name) => map[name].phone;

console.log(findPhoneByName(map, 'mark'));

