function myAsync(gen) {
  return new Promise(function (resolve, reject) {
    let g = gen();
    // console.log('g: ', g);
    function step(val) {
      let res;
      try {
        res = g.next(val);
      } catch (e) {
        return reject(e);
      }
      console.log('res: ', res);
      if (res.done) {
        return res.value;
      }

      Promise.resolve(res.value).then(
        (val) => {
          step(val);
        },
        (err) => {
          g.throw(err);
        }
      );
    }
    step();
  });
}

function* myGenerator() {
  try {
    console.log(yield Promise.resolve(1));
    console.log(yield 2);
    console.log(yield Promise.reject('error'));
  } catch (e) {
    console.log('e: ', e);
  }
}

let result = myAsync(myGenerator);
// console.log('result: ', result);
