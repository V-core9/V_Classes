const {vUID, v_uid} = require('../src/vUID');
var test01 = "vUID_"+Date.now();
var demoV_UID = new vUID();


test('demoV_UID.get() []', () => {
  expect( demoV_UID.get()).toBe(test01);
});

test('demoV_UID.get() []', () => {
  expect(typeof demoV_UID.get()).toBe("string");
});

test('demoV_UID.set(false)', () => {
  expect(demoV_UID.set(false)).toBe(false);
});


test('demoV_UID.set("asd123")', () => {
  expect(demoV_UID.set("asd123")).toBe(false);
});


test('demoV_UID.set(12354678)', () => {
  expect(demoV_UID.set(12354678)).toBe(false);
});


test('demoV_UID.set(null)', () => {
  expect(demoV_UID.set(null)).toBe(false);
});


test('v_uid()', () => {
  expect(v_uid()).toBe(v_uid());
});

