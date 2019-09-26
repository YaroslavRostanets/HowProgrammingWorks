'use strict';

const countTypesInArray = [true, 'hello', 5, 12, -2, false, 'w', 'С', 42, 'T'];
const hash = {};

for (const i of countTypesInArray) {
  const prop = typeof(i);
  hash[prop] = hash[prop] !== undefined ? ++hash[prop] : 1;
}

module.exports = { countTypesInArray };
