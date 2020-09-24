
let code = {};

code.dragStart = (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
};

code.dragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

code.drop = (event) => {
  const id = event.dataTransfer.getData('text');
  const element = document.getElementById(id);
  event.target.appendChild(element);
};
