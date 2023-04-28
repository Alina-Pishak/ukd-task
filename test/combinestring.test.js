test("combines and removes Z from an array of strings", () => {
  expect(combineAndRemoveZ(["hello", "world"])).toBe("helloworld");
});

test("does not remove non-Z characters", () => {
  expect(combineAndRemoveZ(["foo", "bar"])).toBe("foobar");
});

test("removes only Z characters, case sensitive", () => {
  expect(combineAndRemoveZ(["Zoo", "zoo"])).toBe("zoozoo");
});