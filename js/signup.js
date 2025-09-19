// Signup function
function createSignupAccount(username, email, password) {
  if (username && email && password.length >= 8) {
    console.log("Account created for " + username + " (" + email + ")");
  } else {
    console.log("Signup failed: Invalid input");
  }
}