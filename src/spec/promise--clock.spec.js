
describe('promise - clock', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects variable to become true', () => {
    jasmine.clock().install();
  
    code.promise();
    jasmine.clock().tick(50);
  
    expect(code.variable).toEqual(true);
    jasmine.clock().uninstall();
  });
});
