describe('Prefs native write failure (FONO-G)', () => {
  it('does not throw and keeps the value in memory when MMKV set throws', () => {
    jest.resetModules();
    jest.doMock(
      'react-native-mmkv',
      () => ({
        MMKV: class {
          getString() { return undefined; }
          getBoolean() { return undefined; }
          delete() {}
          set() { throw new Error('Failed to set install_timestamp!'); }
        },
      }),
      { virtual: true },
    );
    const { Prefs } = require('../store/mmkv');
    expect(() => Prefs.setInt('install_timestamp', 123)).not.toThrow();
    expect(Prefs.getInt('install_timestamp')).toBe(123);
    expect(() => Prefs.setBool('b', true)).not.toThrow();
  });
});
