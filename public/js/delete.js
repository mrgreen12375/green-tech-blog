const deleteBlogHandler = async (event) => {
    event.preventDefault();
    const blogId = document.getElementById('blog-id')

    fetch("/api/post/" + blogId.value, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#deleteButton").addEventListener("click", deleteBlogHandler);