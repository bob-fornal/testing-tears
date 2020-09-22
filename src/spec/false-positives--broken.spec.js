
describe('false positives - broken', () => {
  it('expects to fail', () => {
    code.handleLater(() => {
      expect(false).toEqual(true);
    });
  });
});