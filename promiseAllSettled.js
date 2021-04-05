function formatSettledResult(suc, value) {
  return suc
    ? { status: 'fullfilled', value }
    : { status: 'rejected', reason: value };
}

function promiseAllSettled(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new Error(`${promises} is not an array`);
    }
    let res = [],
      counter = 0;
    promises.forEach(function (value, ind) {
      Promise.resolve(value)
        .then(function (result) {
          counter++;
          res[ind] = formatSettledResult(true, result);
          if (counter === promises.length) return resolve(res);
        })
        .catch(function (err) {
          counter++;
          res[ind] = formatSettledResult(false, err);
          if (counter === promises.length) return resolve(res);
        });
    });
  });
}

let p1 = new Promise(function (resolve, reject) {
  resolve(4444);
});

let p2 = new Promise(function (resolve, reject) {
  reject(-1111);
});

promiseAllSettled([p1, p2]).then((res) => {
  console.log(res);
});
