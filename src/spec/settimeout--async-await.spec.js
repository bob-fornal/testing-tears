
describe('settimeout - async / await', () => {
  it('expects variable to be set to true', async () => {
    await code.testable_3();
    expect(code.variable).toEqual(true);
  });
});
