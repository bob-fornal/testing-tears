
describe('setInterval - clock', () => {
  it('expects variable to become true', function() {
    jasmine.clock().install();
  
    code.testable_1();
    jasmine.clock().tick(1000);
  
    expect(code.variable).toEqual(true);
    jasmine.clock().uninstall();
  });
});
