
describe('async-await test', () => {

  it('expects varible to be set to true', async () => {
    await code.testable();
    expect(code.variable).toEqual(true);
  });
});
