
describe('bad chaining', () => {
  it('expects to get value and then check it', (done) => {
    code.get()
      .then(value => {
        code.check(value)
          .then(response => {
            expect(response).toEqual('wrong answer');
          });
      })
      .then(() => done())
      .catch(done);
  });
});