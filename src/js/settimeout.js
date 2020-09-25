
let code = {
  variable: false
};

code.init = () => {
  code.variable = false;
};

/* done and clock */
code.testable_1 = () => {
  setTimeout(function() {
    code.variable = true;
  }, 10);
};

/* Synchronous */
code.changeVariable = () => {
  code.variable = true;
};

code.testable_2 = () => {
  setTimeout(changeVariable, 10);
};

/* Async / Await */
code.sleep = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

code.testable_3 = async () => {
  await code.sleep(10);
  code.variable = true;
};
