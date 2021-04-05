// 1. 接收一个promise数组
// 2. 返回一个新的promise对象
// 3. 遍历传入的promise数组，用promise.resolve将参数包一层，使其变成一个promise对象
// 4. 所有参数成功才算回调成功
// 5. promise数组其中一个promise失败，这触发失败状态，第一个失败的promise信息作为promiseAll的失败信息

function promiseAll(arr) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(arr)) {
      throw new Error(`${arr} is not an array`);
    }
    let res = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      // 核心步骤
      Promise.resolve(arr[i])
        .then((val) => {
          counter++;
          res.push(val);
          if (counter === arr.length) return resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1));
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(3));
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(5));
});

promiseAll([p1, p2, p3]).then((val) => {
  console.log(val);
});
