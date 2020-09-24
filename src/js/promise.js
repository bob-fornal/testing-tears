
let code = {
  variable: false
};

code.init = () => {
  code.variable = false;
};

code.promise = () => {
  new Promise((resolve, reject) => {
    code.variable = true;
    resolve(code.variable);
  })
  .catch((err) => console.log(err));
};
