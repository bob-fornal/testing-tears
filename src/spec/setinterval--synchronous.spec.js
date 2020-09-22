
describe('setInterval - synchronous', () => {
  it('expects variable to become true', () => {
    code.counter = 5;
    code.afterInterval();
    expect(code.variable).toEqual(true);
  });
});