
describe('callback - done', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects answers to be correct', (done) => {
    code.runAsync_1();
    setTimeout(() => {
      expect(code.answers).toEqual([2, 4, 6]);
      done();
    }, 100);  
  });
});
