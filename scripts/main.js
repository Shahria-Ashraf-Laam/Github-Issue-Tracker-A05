// console.log("hello");

document.getElementById("sign-btn").addEventListener("click", () => {

  // Getting username and password from input fields
  const usernameInput = document.getElementById("username-input");
  const username = usernameInput.value;

  const passInput = document.getElementById("password-input");
  const password = passInput.value;

  // Checking username and password
  if (username === "admin" && password === "admin123") {
    alert("Login Successful");
    window.location.assign("homepage.html");
  }
  else {
    alert("Login Failed, Try Again!");
    return;
  }

})
