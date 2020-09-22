
const code = {};

code.handleLater = (fn, time = 10) => {
  setTimeout(fn, time);
};

code.get = async () => {
  const fn = () => 'answer';
  return await code.handleLater(fn, 100);
};

code.check = (password) => {
  if (password === 'answer') {
    return Promise.resolve('correct');
  }
  return Promise.resolve('incorrect');
};
