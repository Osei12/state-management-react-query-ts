export async function fetchPosts() {
  const response = await fetch(" http://localhost:4000/posts");

  return response.json();
}
export async function fetchPost(id: number) {
  const response = await fetch(`http://localhost:4000/posts/${id}`);

  return response.json();
}
export async function deletePost(id: number) {
  const response = await fetch(`http://localhost:4000/posts/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function createPost(newPost: PostData) {
  const response = await fetch(" http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  return response.json();
}

export async function updatePost(updatedPost: PostData) {
  const response = await fetch(
    `http://localhost:4000/posts/${updatedPost.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    },
  );

  return response.json();
}
