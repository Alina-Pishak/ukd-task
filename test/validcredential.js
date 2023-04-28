function checkCredentials(login, password) {
  const validUsers = [
    { login: "user1", password: "password1", secretPhrase: "this is a secret" },
    { login: "user2", password: "password2", secretPhrase: "another secret" },
    { login: "user3", password: "password3", secretPhrase: "top secret" },
  ];

  const user = validUsers.find(
    (user) => user.login === login && user.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return user.secretPhrase;
}