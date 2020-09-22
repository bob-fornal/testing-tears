
describe('setTimeout - synchronous', () => {
  it('expects variable to become true', function() {
    code.changeVariable();
    expect(code.variable).toEqual(true);
  });
});