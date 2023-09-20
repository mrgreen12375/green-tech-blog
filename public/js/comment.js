
const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_id = document.querySelector('#blogId').value;
    const comment = document.querySelector('#comment').value;
  
    if (comment) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          blog_id,
          comment,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      document.location.reload();
    }
  };

  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);