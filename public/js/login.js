const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#username-login");
    const password = document.querySelector("#password-login");
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: name.value,
        password: password.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);