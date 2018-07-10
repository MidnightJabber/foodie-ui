const ReactElementType = {
  div: 'div',
  span: 'span',
};

describe('ReactElementType', () => {
  it('map contains all test types', () => {
    expect(ReactElementType.div).toBe('div');
    expect(ReactElementType.span).toBe('span');
  });
});

export default ReactElementType;
