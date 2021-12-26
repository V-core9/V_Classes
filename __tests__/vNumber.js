const {vNumber} = require('../');
var vNumberVAL = new vNumber();


test('vNumberVAL.get() [undefined]', async () => {
  expect(await vNumberVAL.get()).toBe(undefined);
});

test('vNumberVAL.set(false)', async () => {
  expect(await vNumberVAL.set(false)).toBe(true);
});

test('vNumberVAL.get() [false]', async () => {
  expect(await vNumberVAL.get()).toBe(false);
});

test('vNumberVAL.set(true)', async () => {
  expect(await vNumberVAL.set(true)).toBe(true);
});

test('vNumberVAL.get() [true]', async () => {
  expect(await vNumberVAL.get()).toBe(true);
});

test('vNumberVAL.set(empty)', async () => {
  expect(await vNumberVAL.set()).toBe(false);
});

test('vNumberVAL.get() [true]', async () => {
  expect(await vNumberVAL.get()).toBe(true);
});


test('vNumberVAL.type() [vBool]', async () => {
  expect(await vNumberVAL.type()).toBe("vNumber");
});

test('vNumberVAL.type(11) [vBool]', async () => {
  expect(await vNumberVAL.type(11)).toBe("vNumber");
});

test('vNumberVAL.set(11) >> [false]', async () => {
  expect(await vNumberVAL.set(11)).toBe(true);
});

test('vNumberVAL.get() [true]', async () => {
  expect(await vNumberVAL.get()).toBe(11);
});

test('vNumberVAL.set("asd123") [true]', async () => {
  expect(await vNumberVAL.set("asd123")).toBe(false);
});

test('vNumberVAL.get() [true]', async () => {
  expect(await vNumberVAL.get()).toBe(11);
});
