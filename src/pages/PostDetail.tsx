import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api/posts';

import BlogPost from '../components/BlogPost';

function PostDetailPage() {
  const [error, setError] = useState<any>();
  const [post, setPost] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    async function loadPost() {
      setIsLoading(true);
      try {
        const post = await getPost(id);
        setPost(post);
      } catch (err: any) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadPost();
  }, [id]);

  return (
    <>
      {isLoading && <p>Loading post...</p>}
      {error && <p>{error.message}</p>}
      {!error && post && <BlogPost title={post.title} text={post.body} />}
    </>
  );
}

export default PostDetailPage;