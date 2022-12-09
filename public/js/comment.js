
const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const blogId = document.querySelector('#blogId').value;
    const comment = document.querySelector('#comment').value;
  
    if (comment) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          blogId,
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