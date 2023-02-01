export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  }
  
  export async function getPost(id: any) {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  }
  
  export async function savePost(post: any) {
    if (post.title.trim().length < 5 || post.body.trim().length < 10) {
      throw new Error('Invalid input data provided.');
    }
  
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error("Could not save post");
    }
  }
  