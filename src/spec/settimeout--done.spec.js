
describe('setTimeout - done', () => {
  it('expects variable to become true', function(done) {
    code.testable_1();
  
    setTimeout(function() {
      expect(code.variable).toEqual(true);
      done();
    }, 20);
  });
});