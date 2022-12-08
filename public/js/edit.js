const editFormHandler = async (event) => {
    event.preventDefault();

    
    const title = document.getElementById('editTitle').value;
    const content = document.getElementById('editContent').value;
    const blogId = document.getElementById('blogId').value;

    fetch("/api/blog/" + blogId, {
        method: "PUT", 
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}

document.querySelector("#edit-form").addEventListener("submit", editFormHandler);