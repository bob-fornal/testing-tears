
describe('async-await test', () => {

  it('expects varible to become true', async () => {
    await code.testable();
    expect(code.variable).toEqual(true);
  });
});
