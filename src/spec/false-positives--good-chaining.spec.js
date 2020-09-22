
describe('good chaining', () => {
  it('expects to get value and then check it', (done) => {
    code.get()
      .then(value => {
        return code.check(value);
      })
      .then(response => {
        expect(response).toEqual('wrong answer');
        done();
      })
      .catch(done);
  });
});