// Promise的三种状态
const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

function promiseResolutionProcedure(promise2, x, resolve, reject) {
  // 判断thenable对象
  if ((typeof x === 'object' || typeof x === 'function') && x !== null) {
    if (typeof x.then === 'function') {
      x.then((y) => {
        promiseResolutionProcedure(promise2, y, resolve, reject);
      }, reject);
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = undefined;
    this.resolvedCallback = [];

    const resovle = (val) => {
      // 模拟异步 Promise.then是微任务
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = FULLFILLED;
          this.value = val;
          // 先后执行所有then方法
          this.resolvedCallback.map((func) => {
            return func();
          });
        }
      });
    };
    const reject = (val) => {
      this.state = REJECTED;
      this.value = val;
    };
    fn(resovle, reject);
  }
  then(onFulfilled = (value) => value, onRejected) {
    if (this.state === PENDING) {
      // 不支持链式调用的写法
      // this.resolvedCallback.push(onFulfilled);
      // 支持链式调用的写法
      const promise2 = new MyPromise((resolve, reject) => {
        this.resolvedCallback.push(() => {
          const x = onFulfilled(this.value);
          promiseResolutionProcedure(promise2, x, resolve, reject);
        });
      });
      return promise2;
    }
  }
}
