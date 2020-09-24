
describe('drag-and-drop events', () => {
  it('expects "dragStart" to set data', () => {
    let resultType = '';
    let resultData = '';
    const mockId = 'ID';
    let mockEvent = {
      dataTransfer: {
        setData: (type, data) => {
          resultType = type;
          resultData = data;
        }
      },
      target: {
        id: mockId
      }
    };

    code.dragStart(mockEvent);
    expect(resultType).toEqual('text/plain');
    expect(resultData).toEqual(mockId);
  });

  it('expects "dragOver" to set drop effect', () => {
    let mockEvent = {
      preventDefault: () => {},
      dataTransfer: {
        dropEffect: null
      }
    };
    spyOn(mockEvent, 'preventDefault').and.stub();

    code.dragOver(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockEvent.dataTransfer.dropEffect).toEqual('move');
  });

  it('expects "drop" to append element to target', () => {
    const data = 'DATA';
    const element = 'ELEMENT';
    let mockEvent = {
      dataTransfer: {
        getData: () => data
      },
      target: {
        appendChild: () => {}
      }
    };
    spyOn(mockEvent.dataTransfer, 'getData').and.callThrough();
    spyOn(document, 'getElementById').and.returnValue(element);
    spyOn(mockEvent.target, 'appendChild').and.stub();
    
    code.drop(mockEvent);
    expect(mockEvent.dataTransfer.getData).toHaveBeenCalledWith('text');
    expect(document.getElementById).toHaveBeenCalledWith(data);
    expect(mockEvent.target.appendChild).toHaveBeenCalledWith(element);
  });
});
