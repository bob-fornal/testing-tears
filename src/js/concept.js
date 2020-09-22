
let code = {
  state: 'NOT-DONE'
};

code.firePromise = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
  });  
};

code.useCase = () => {
  code.firePromise().then(
    result => { code.state = result; },
    error => { code.state = error; }
  );
};
