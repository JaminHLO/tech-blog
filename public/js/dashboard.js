

const buttonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  } else if (event.target.hasAttribute('create')) {
    console.log("create new blog post");
  }
};


document
  .querySelector('.blog-list')
  .addEventListener('click', buttonHandler);
