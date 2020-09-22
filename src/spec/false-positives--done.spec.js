
describe('false positives - done', () => {
  it('expects to fail', (done) => {
    code.handleLater(() => {
      expect(false).toEqual(true);
      done();
    });
  });
});