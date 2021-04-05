function Test1(name) {
  this.name = name;
}

function Test2(name) {
  this.name = name;
  return 1;
}

function Test3(name) {
  this.name = name;
  return { age: 18 };
}

function myNew(Obj, ...args) {
  let newObj = {};
  Object.create(newObj, Obj);
  let result = Obj.apply(newObj, args);
  return typeof result === 'object' ? result : newObj;
}

console.log(myNew(Test1, 111).name);
