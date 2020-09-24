describe('callback - synchronous', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects answers to be correct', () => {
    code.runAsyncCallback(1);
    code.runAsyncCallback(2);
    code.runAsyncCallback(3);
    expect(code.answers).toEqual([2, 4, 6]);
  });
});