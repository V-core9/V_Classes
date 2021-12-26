const {vUID, v_uid} = require('../');
var demoV_UID = new vUID();



test('demoV_UID.get() []', async () => {
  expect(typeof (await demoV_UID.get())).toBe("string");
});

test('demoV_UID.set(false)', async () => {
  expect(await demoV_UID.set(false)).toBe(false);
});


test('demoV_UID.set("asd123")', async () => {
  expect(await demoV_UID.set("asd123")).toBe(false);
});


test('demoV_UID.set(12354678)', async () => {
  expect(await demoV_UID.set(12354678)).toBe(false);
});


test('demoV_UID.set(null)', async () => {
  expect(await demoV_UID.set(null)).toBe(false);
});


test('v_uid()', async () => {
  expect(v_uid()).toStrictEqual(v_uid());
});

