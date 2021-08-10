export const authSuccess = (token) => {
  // Saves user token to localStorage
  if (token) {
    localStorage.setItem("auth_token", token);
    window.location.assign("/");
  }
  console.log(token);
};
