
describe('setTimeout - synchronous', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects variable to become true', function() {
    code.changeVariable();
    expect(code.variable).toEqual(true);
  });
});