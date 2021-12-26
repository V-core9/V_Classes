const { vString } = require('../');
var vStringVAL = new vString();


test('vStringVAL.get() [undefined]', async () => {
  expect(await vStringVAL.get()).toBe(undefined);
});

test('vStringVAL.set(false)', async () => {
  expect(await vStringVAL.set(false)).toBe(false);
});

test('vStringVAL.get() [false]', async () => {
  expect(await vStringVAL.get()).toBe(undefined);
});


test('vStringVAL.type() [vBool]', async () => {
  expect(await vStringVAL.type()).toBe("vString");
});

test('vStringVAL.type(11) [vBool]', async () => {
  expect(await vStringVAL.type(11)).toBe("vString");
});

test('vStringVAL.set(11) >> [false]', async () => {
  expect(await vStringVAL.set(11)).toBe(true);
});

test('vStringVAL.get() [true]', async () => {
  expect(await vStringVAL.get()).toBe(11);
});

test('vStringVAL.set("asd123") [true]', async () => {
  expect(await vStringVAL.set("asd123")).toBe(true);
});

test('vStringVAL.get() [true]', async () => {
  expect(await vStringVAL.get()).toBe("asd123");
});
