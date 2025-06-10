// Returns a resolved promise with a user object
function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}

export default signUpUser;
