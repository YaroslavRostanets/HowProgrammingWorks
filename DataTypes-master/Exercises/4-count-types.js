'use strict';

//const array = [true, 'hello', 5, 12, -2, false, 'w', 'С', 42, 'T'];


const countTypesInArray = array => {
  const obj = {};
  for (const i of array) {
    const prop = typeof(i);
    obj[prop] = obj[prop] !== undefined ? ++obj[prop] : 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
