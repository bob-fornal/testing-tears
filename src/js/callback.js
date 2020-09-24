
let code = {
  answers: [],
  numbers: [1, 2, 3]
};

code.init = () => {
  code.answers = [];
};

code.forEachAsync_1 = (items, callback) => {
  for (let item of items) {
    setTimeout(() => {
      callback(item);
    }, 0, item);
  }
};

code.runAsyncCallback = (number) => {
  code.answers.push(number * 2);
};

code.runAsync_1 = () => {
  code.forEachAsync_1(code.numbers, code.runAsyncCallback);
};

code.sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
 };

code.forEachAsync_2 = async (items, callback) => {
  for (let item of items) {
    await code.sleep(0);
    callback(item);
  }
};

code.runAsync_2 = async () => {
  await code.forEachAsync_2(code.numbers, (number) => {
    code.answers.push(number * 2);
  });
};
