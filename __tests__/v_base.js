const {v_base} = require('../');
var demoItem = new v_base();

function demoTest01 () {
  return 'INNER FUNCTION Value >> demoTest01';
}



test('demoItem.set(11)', async () => {
  expect(await demoItem.set(11)).toBe(true);
});

test('demoItem.set() >> null', async () => {
  expect(await demoItem.set()).toBe(false);
});

test('demoItem.get() >> 11', async () => {
  expect(await demoItem.get()).toBe(11);
});

test('demoItem.set() >> 2nd NULL', async () => {
  expect(await demoItem.set(null)).toBe(true);
});

test('demoItem.get() >> NULL', async () => {
  expect(await demoItem.get()).toBe(null);
});

test('demoItem.set("ABS123")', async () => {
  expect(await demoItem.set("ABS123")).toBe(true);
});

test('demoItem.get() >> ABS123', async () => {
  expect(await demoItem.get()).toBe("ABS123");
});

test('demoItem.set() >> 2nd empty', async () => {
  expect(await demoItem.set()).toBe(false);
});

test('demoItem.get() >> 2nd ABS123', async () => {
  expect(await demoItem.get()).toBe("ABS123");
});

test('demoItem.set(demoTest01)', async () => {
  expect(await demoItem.set(demoTest01)).toBe(true);
});

test('demoItem.get() >> demoTest01', async () => {
  expect(await demoItem.get()).toBe(demoTest01);
});

test('demoItem._value()', async () => {
  expect(await demoItem._value()).toBe(demoTest01());
});


test('demoItem.type() [vBool]', async () => {
  expect(await demoItem.type()).toBe("v_base");
});
