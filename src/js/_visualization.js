
let codeVisualization = {
  handleRunner: true
};

codeVisualization.outerWrapper = document.querySelector('.outer-wrapper');

codeVisualization.separator = () => {
  let hr = document.createElement('hr');
  return hr;
};

codeVisualization.init = async (structure) => {
  const wrapper = codeVisualization.outerWrapper;

  let title = document.createElement('div');
  title.classList.add('outer-title');
  title.innerText = structure.title;
  wrapper.appendChild(title);

  let home = document.createElement('a');
  home.setAttribute('href', '/');
  home.classList.add('home');
  home.innerText = 'HOME';

  let menu = document.createElement('div');
  menu.appendChild(home);
  menu.classList.add('menu');

  if (codeVisualization.handleRunner === true) {
    let runner = document.createElement('a');
    runner.setAttribute('href', `/runners/${ structure.runner }`);
    runner.classList.add('menu');
    runner.innerText = 'Test Runner';
    runner.setAttribute('target', '_blank');
    menu.appendChild(runner);
  }
  wrapper.appendChild(menu);

  for (const suite of structure.suite) {
    const hr = codeVisualization.separator();
    wrapper.appendChild(hr);

    await codeVisualization.processFile(suite);
  }

  hljs.initHighlighting();
};

codeVisualization.processFile = async (suite) => {
  let inner = document.createElement('div');
  inner.classList.add('inner-wrapper');

  let title = document.createElement('div');
  title.classList.add('title');
  title.innerText = suite.title;
  inner.appendChild(title);

  // handle code
  let code = document.createElement('div');
  code.classList.add('code', 'code-wrapper');
  code.innerHTML = '<pre><code></code></pre>';
  codeAppendTo = code.querySelector('code');
  codeAppendTo.classList.add('language-javascript');

  await fetch(`../js/${ suite.code }.js`)
    .then(response => response.text())
    .then(testCode => {
      testCode = testCode.replace(/^(\n)*/g, '');
      testCode = testCode.replace(/(\n)*$/g, '');
      codeAppendTo.innerText = testCode;
    })
    .catch(err => console.log('Failed to fetch page: ', err));

  // handle tests
  let tests = document.createElement('div');
  tests.classList.add('tests', 'tests-wrapper');

  for (let file of suite.tests) {
    let test = document.createElement('div');
    test.classList.add('test');
    test.innerHTML = '<pre><code></code></pre>';
    testAppendTo = test.querySelector('code');
    testAppendTo.classList.add('language-javascript');
  
    await fetch(`../spec/${ file }.spec.js`)
      .then(response => response.text())
      .then(testCode => {
        testCode = testCode.replace(/^(\n)*/g, '');
        testCode = testCode.replace(/(\n)*$/g, '');
        testAppendTo.innerText = testCode;
      })
      .catch(err => console.log('Failed to fetch page: ', err));
  
    tests.appendChild(test);
  }
      

  inner.appendChild(code);
  inner.appendChild(tests);
  codeVisualization.outerWrapper.appendChild(inner);
};
