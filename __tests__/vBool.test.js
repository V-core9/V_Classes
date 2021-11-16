const vBool = require('../src/vBool');
var demoBool = new vBool();


test('demoBool.get() [undefined]', () => {
  expect(demoBool.get()).toBe(undefined);
});

test('demoBool.set(false)', () => {
  expect(demoBool.set(false)).toBe(true);
});

test('demoBool.get() [false]', () => {
  expect(demoBool.get()).toBe(false);
});

test('demoBool.set(true)', () => {
  expect(demoBool.set(true)).toBe(true);
});

test('demoBool.get() [true]', () => {
  expect(demoBool.get()).toBe(true);
});

test('demoBool.set(empty)', () => {
  expect(demoBool.set()).toBe(false);
});

test('demoBool.get() [true]', () => {
  expect(demoBool.get()).toBe(true);
});


test('demoBool.type() [vBool]', () => {
  expect(demoBool.type()).toBe("vBool");
});

test('demoBool.type(11) [vBool]', () => {
  expect(demoBool.type(11)).toBe("vBool");
});

test('demoBool.set(11) >> [false]', () => {
  expect(demoBool.set(11)).toBe(false);
});

test('demoBool.get() [true]', () => {
  expect(demoBool.get()).toBe(true);
});

test('demoBool.set("asd123") [true]', () => {
  expect(demoBool.set("asd123")).toBe(false);
});

test('demoBool.get() [true]', () => {
  expect(demoBool.get()).toBe(true);
});
