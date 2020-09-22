
describe('setInterval - done', () => {
  it('expects variable to become true', (done) => {
    code.testable_1();

    setTimeout(function() {
      expect(code.variable).toEqual(true);
      done();
    }, 1000);
  });
});