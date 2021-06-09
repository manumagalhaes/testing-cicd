describe("test", () => {
  it.each([
    [1, 2, 3],
    [2, 2, 4],
  ])(
    "should correctly take %d and %d to make %d",
    (param1, param2, expected) => {
      expect(param1 + param2).toEqual(expected);
    }
  );
});
