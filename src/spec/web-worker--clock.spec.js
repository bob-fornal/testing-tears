
describe('web worker - clock', () => {
  it('expects messages for 0 to 10', function() {
    jasmine.clock().install();
    spyOn(window, 'postMessage').and.stub();

    onmessage();
    jasmine.clock().tick(100);
  
    expect(window.postMessage).toHaveBeenCalledTimes(11);
    expect(window.postMessage).toHaveBeenCalledWith(0);
    expect(window.postMessage).toHaveBeenCalledWith(10);
    expect(window.postMessage).toHaveBeenCalledWith(20);
    expect(window.postMessage).toHaveBeenCalledWith(30);
    expect(window.postMessage).toHaveBeenCalledWith(40);
    expect(window.postMessage).toHaveBeenCalledWith(50);
    expect(window.postMessage).toHaveBeenCalledWith(60);
    expect(window.postMessage).toHaveBeenCalledWith(70);
    expect(window.postMessage).toHaveBeenCalledWith(80);
    expect(window.postMessage).toHaveBeenCalledWith(90);
    expect(window.postMessage).toHaveBeenCalledWith(100);
    jasmine.clock().uninstall();
  });
});
