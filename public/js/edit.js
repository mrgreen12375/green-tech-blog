const editFormHandler = async (event) => {
    event.preventDefault();

    
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    const blogId = document.getElementById('blog-id')

    fetch("/api/blogs/" + blogId.value, {
        method: "put", 
        body: JSON.stringify({
            title: title.value,
            content: content.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}

document.querySelector("#edit-form").addEventListener("submit", editFormHandler);