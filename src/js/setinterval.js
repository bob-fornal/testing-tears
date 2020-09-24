
let code = {
  variable: false,
  counter: 1,
  interval: null
};

code.init = () => {
  code.variable = false;
  code.counter = 1;
  code.interval = null;
};

/* done and clock */
code.testable_1 = () => {
  code.counter = 1;
  code.interval = setInterval(() => {
    if (code.counter === 5) {
      code.variable = true;
      clearInterval(code.interval);
    }
    code.counter++;
  }, 50);
  return code.interval;
};

/* Synchronous */
code.afterInterval = () => {
  if (code.counter === 5) {
    code.variable = true;
    clearInterval(code.interval);
  }
  code.counter++;
};

code.testable_2 = () => {
  code.counter = 1;
  code.interval = setInterval(code.afterInterval, 50);
  return interval;
};

/* Async / Await */
code.waitUntil = () => {
  return new Promise(resolve => {
    code.counter = 1;
    code.interval = setInterval(() => {
      if (code.counter === 5) {
        code.variable = true;
        clearInterval(code.interval);
        resolve();
      }
      code.counter++;
    }, 50);
  });
};

code.testable_3 = async () => {
  await code.waitUntil();
};
