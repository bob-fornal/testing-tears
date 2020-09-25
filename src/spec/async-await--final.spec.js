
describe('async-await - final', () => {
  it('expects varible to become true', async () => {
    await code.testable();
    expect(code.variable).toEqual(true);
  });
});
