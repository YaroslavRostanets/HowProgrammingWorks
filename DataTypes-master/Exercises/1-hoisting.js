'use strict';
/* eslint no-use-before-define: 0 */

const fn = () => {
  test = true;
  var test;
  return test;
};

module.exports = { fn };
