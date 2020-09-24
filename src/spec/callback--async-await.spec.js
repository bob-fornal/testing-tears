
describe('callback - async / await', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects answers to be correct', async () => {
    await code.runAsync_2();
    expect(code.answers).toEqual([2, 4, 6]);
  });
});
