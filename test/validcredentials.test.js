test("returns secret phrase for valid credentials", () => {
  expect(checkCredentials("user1", "password1")).toBe("this is a secret");
});

test("throws error for invalid credentials", () => {
  expect(() => checkCredentials("invalid", "credentials")).toThrowError(
    "Invalid credentials"
  );
});