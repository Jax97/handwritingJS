### Promise 自身的状态

1. state 存放当前状态
2. value 存放当前状态值
3. then 方法，返回一个 Promise 链式调用
4. catch 方法
5. finally 方法
6. 静态方法 Promise.all、Promise.resolve

### 步骤

1. 实现一个 Promise，在 setTimeout 中去 resolve（then 先收集函数，resolve 再执行）
2. 实现一个 Promise，支持同步的 resolve 写法 （resolve 写成异步的，让 then 先收集函数）
3. 实现一个 Promise，防止 resolve 多次 （根据 state 状态是否是 pending 来判断）
4. 实现一个 Promise，可以让 then 方法链式调用（return 一个新的 MyPromise 并  在 this.resolvedCallback 数组里 push 一个 resolve 之后的函数。）
5. 实现一个 Promise，支持空 then 函数（给 onFullfilled 一个默认函数，value=>value，传什么就返回什么）
6. 实现一个 Promise，支持 then 传递 thenable 对象（promiseResolutionProcedure 函数判断 x 是否是 thenable 的对象或者函数，如果是的话，resolve thenable 自己的 resolve。如果不是，走原来逻辑，resolve(x)。）
7. 实现一个 Promise，
8. 实现一个 Promise，
9. 实现一个 Promise，
