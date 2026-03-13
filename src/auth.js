const { findUser } = require("./users");

function login(username, password) {

  if (typeof username !== 'string' || typeof password !== 'string' || username.trim() === '' || password.trim() === '') {
    return { success: false, message: "Invalid input" }; 
  }
  if (password.length < 8) {
    return { success: false, message: "Password too short" };
  }

  const user = findUser(username);

  if (!user) {
    console.log(`FAILED_LOGIN | ${new Date().toISOString()} | User: ${username}`);
    return { success: false, message: "Invalid credentials" };
  }

  if (user.password !== password) {
    console.log(`FAILED_LOGIN | ${new Date().toISOString()} | User: ${username}`);
    return { success: false, message: "Invalid credentials" };
  }

  return {
    success: true,
    message: "Login successful",
    role: user.role
  };
}

module.exports = { login };
// Ready for review