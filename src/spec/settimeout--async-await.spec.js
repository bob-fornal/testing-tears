
describe('settimeout - async / await', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects variable to become true', async () => {
    await code.testable_3();
    expect(code.variable).toEqual(true);
  });
});
