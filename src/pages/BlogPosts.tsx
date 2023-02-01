import { useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import { Loader, Stack} from 'rsuite';
import Posts from '../components/Posts';

function BlogPostsPage() {
  const [error, setError] = useState();
  const [posts, setPosts] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (err: any) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadPosts();
  }, []);

  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      <h2>Our Blog Posts</h2>
      {isLoading && <Loader content="Loading..." vertical />}
      {error && <p>{error}</p>}
      {!error && posts && <Posts blogPosts={posts} />}
    </Stack>
  );
}

export default BlogPostsPage;