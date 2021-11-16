const v_base = require('../src/v_base');
var demoItem = new v_base();

function demoTest01 () {
  return 'INNER FUNCTION Value >> demoTest01';
}



test('demoItem.set(11)', () => {
  expect(demoItem.set(11)).toBe(true);
});

test('demoItem.set() >> null', () => {
  expect(demoItem.set()).toBe(false);
});

test('demoItem.get() >> 11', () => {
  expect(demoItem.get()).toBe(11);
});

test('demoItem.set() >> 2nd NULL', () => {
  expect(demoItem.set(null)).toBe(true);
});

test('demoItem.get() >> NULL', () => {
  expect(demoItem.get()).toBe(null);
});

test('demoItem.set("ABS123")', () => {
  expect(demoItem.set("ABS123")).toBe(true);
});

test('demoItem.get() >> ABS123', () => {
  expect(demoItem.get()).toBe("ABS123");
});

test('demoItem.set() >> 2nd empty', () => {
  expect(demoItem.set()).toBe(false);
});

test('demoItem.get() >> 2nd ABS123', () => {
  expect(demoItem.get()).toBe("ABS123");
});

test('demoItem.set(demoTest01)', () => {
  expect(demoItem.set(demoTest01)).toBe(true);
});

test('demoItem.get() >> demoTest01', () => {
  expect(demoItem.get()).toBe(demoTest01);
});

test('demoItem._value()', () => {
  expect(demoItem._value()).toBe(demoTest01());
});


test('demoItem.type() [vBool]', () => {
  expect(demoItem.type()).toBe("v_base");
});
