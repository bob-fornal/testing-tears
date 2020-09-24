
describe('settimeout - clock', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects variable to become true', function() {
    jasmine.clock().install();
  
    code.testable_1();
    jasmine.clock().tick(20);
  
    expect(code.variable).toEqual(true);
    jasmine.clock().uninstall();
  });
});
