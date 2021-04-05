Array.prototype.myReduce = function (fn, initialValue) {
  if (this.length === 0) {
    if (initialValue === undefined) {
      throw new Error('reduce array with undefined initial value');
    } else {
      return initialValue;
    }
  }
  let arr = this;
  let i = initialValue ? 0 : 1;
  let prev = initialValue ? initialValue : arr[0];
  for (; i < arr.length; i++) {
    prev = fn(prev, arr[i]);
  }
  return prev;
};

let arr = [1, 2, 4, 3, 4];
function add(a, b) {
  return a + b;
}

console.log(arr.myReduce(add, 1));

Array.prototype.myMap = function (fn, thisArg = []) {
  if (typeof fn !== 'function') {
    throw new Error(`${fn} is not a function`);
  }
  const res = [];
  this.reduce(function (accumulator, cur, index, arr) {
    res.push(fn.call(thisArg, cur, index, arr));
  }, []); // 注意reduce第二个参数是[]，这样cur才会取到数组的第一个元素
  return res;
};

arr = [1, 2, 3];
console.log(arr.myMap((x) => x * 2));
