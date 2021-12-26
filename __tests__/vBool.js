const { vBool } = require('../');
var demoBool = new vBool();


test('demoBool.get() [undefined]', async () => {
  expect(await demoBool.get()).toBe(undefined);
});

test('demoBool.set(false)', async () => {
  expect(await demoBool.set(false)).toBe(true);
});

test('demoBool.get() [false]', async () => {
  expect(await demoBool.get()).toBe(false);
});

test('demoBool.set(true)', async () => {
  expect(await demoBool.set(true)).toBe(true);
});

test('demoBool.get() [true]', async () => {
  expect(await demoBool.get()).toBe(true);
});

test('demoBool.set(empty)', async () => {
  expect(await demoBool.set()).toBe(false);
});

test('demoBool.get() [true]', async () => {
  expect(await demoBool.get()).toBe(true);
});


test('demoBool.type() [vBool]', async () => {
  expect(await demoBool.type()).toBe("vBool");
});

test('demoBool.type(11) [vBool]', async () => {
  expect(await demoBool.type(11)).toBe("vBool");
});

test('demoBool.set(11) >> [false]', async () => {
  expect(await demoBool.set(11)).toBe(false);
});

test('demoBool.get() [true]', async () => {
  expect(await demoBool.get()).toBe(true);
});

test('demoBool.set("asd123") [true]', async () => {
  expect(await demoBool.set("asd123")).toBe(false);
});

test('demoBool.get() [true]', async () => {
  expect(await demoBool.get()).toBe(true);
});
