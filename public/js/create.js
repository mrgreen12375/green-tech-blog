const createFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="blog-title"]').value;
    const content = document.querySelector('textarea[name="blog-content"]').value;
  
    const token = localStorage.getItem("token");
    await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    });
  
    document.location.replace("/dashboard");
  };
  
  document
    .querySelector("#create-form")
    .addEventListener("submit", createFormHandler);