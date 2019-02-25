require('../src/data.js');

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData.toBe('function')
  });

  it('returns `filterData`', () => {
    expect(filterData).toBe('filterData');
  });
});

describe('scortData', () => {
  it('is a function', () => {
    expect(typeof scourtData.toBe('function')
  });

  it('returns `scortData`', () => {
    expect(scortData).toBe('scortData');
  });
});

describe('compuSatatus', () => {
  it('is a function', () => {
    expect(typeof compuStatus.toBe('function')
  });

  it('returns `compuStatus`', () => {
    expect(compuStatus).toBe('compuData');
  });
});
