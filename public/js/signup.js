const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#username-signup");
    const password = document.querySelector("#password-signup");
    fetch("/api/user", {
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
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);