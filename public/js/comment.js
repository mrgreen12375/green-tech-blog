
const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const blogId = document.querySelector('input[name="blogs-id"]').value;
    const body = document.querySelector('textarea[name="commentInput"]').value;
  
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          blogId,
          body
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