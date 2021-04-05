// 先执行，n秒后执行第二次

function debounce(fn, wait, immediate) {
  let timer;
  return function () {
    const context = this;
    let args = arguments;

    if (immediate) {
      let callNow = !timer;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
      if (callNow) fn.apply(context, args);
    } else {
      // 首先清除掉之前的操作
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    }
  };
}
