
describe('promise - done', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects variable to become true', (done) => {
    code.promise();

    setTimeout(() => {
      expect(code.variable).toEqual(true);
      done();
    }, 50);
  });
});
