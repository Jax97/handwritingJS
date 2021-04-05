setTimeout = (function (setTimeout) {
  let count = 0;
  return function (fn, wait) {
    count++;
    let that = this;
    setTimeout(function () {
      // apply传入arguments，arguments可以被用作被调用对象的所有未指定的参数
      // 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。
      console.log(fn.apply(that, arguments));
    }, wait);
  };
})(setTimeout);

let a1 = 1,
  b1 = 2,
  c1 = 3;
setTimeout(function (a = a1, b = b1, c = c1) {
  return a + b + c;
});
