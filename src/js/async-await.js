
const code = {
  variable: false
};

code.sleep = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

code.testable = async () => {
  await code.sleep(10);
  code.variable = true;
};
