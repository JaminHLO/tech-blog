
// function used to create comment
const newFormHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#comment-text').value.trim();
  const blog_id = event.target.getAttribute('data-num');
  console.log(event.target);

  // console.log("blog_id is", blog_id);

  if (text && blog_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ text, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

// update entry now handled from route call


// function used to delete blog entry
const deleteBlog = async (event) => {
  if (event.target.hasAttribute('delete-id')) {
    const id = event.target.getAttribute('delete-id');
    console.log(`going to delete ${id}`);
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  } 
}

// listen for submit button click for  comment entry
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

// listen for delete button click for blog delete
document
  .querySelector('.btn-danger')
  .addEventListener('click', deleteBlog);


