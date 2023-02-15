/*code link:https://www.codewars.com/kata/array-helpers 
square(), cube(), average(), sum(), even() and odd()*/
Array.prototype.square = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] * this[i];
  }
  return this;
};
Array.prototype.cube = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] * this[i] * this[i];
  }
  console.log(this);
};
Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};
Array.prototype.average = function () {
  return this.sum() / this.length;
};
Array.prototype.even = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) result.push(this[i]);
  }
  return result;
};
Array.prototype.odd = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) result.push(this[i]);
  }
  return result;
};

a = [ 1, 8, 27, 64, 125 ];
console.log(a.square());
