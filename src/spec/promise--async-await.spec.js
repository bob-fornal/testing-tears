
describe('promise - async / await', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects variable to become true', async () => {
    await code.promise();
    expect(code.variable).toEqual(true);
  });
});
