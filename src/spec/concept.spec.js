
describe('concept', () => {
  it('expects to handle success', async () => {
    const someValue = 'anything';
    spyOn(code, 'firePromise')
      .and.returnValue(Promise.resolve(someValue));

    await code.useCase();
    expect(code.state).toEqual(someValue);
  });
});