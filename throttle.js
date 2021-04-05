function throttle(fn, wait) {
  let timer;
  return function () {
    if (!timer) {
      const context = this;
      const args = arguments;
      timer = setTimeout(function () {
        timer = null;
        fn.apply(context, args);
      }, wait);
    }
  };
}
