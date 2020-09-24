
describe('callback - clock', () => {
  beforeEach(() => {
    code.init();
  });

  it('expects answers to be correct', () => {
    jasmine.clock().install();

    code.runAsync_1();
    jasmine.clock().tick(100);
  
    expect(code.answers).toEqual([2, 4, 6]);
    jasmine.clock().uninstall();
  });
});
