import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from 'rsuite';
import { savePost } from '../api/posts';

import NewPostForm from '../components/NewPostForm';

function NewPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<any>();
  const navigate = useNavigate();

  async function submitHandler(event: any) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(event.target);
      const post = {
        title: formData.get('title'),
        body: formData.get('post-text'),
      };
      await savePost(post);
      navigate('/');
    } catch (err: any) {
      setError(err);
    }
    setIsSubmitting(false);
  }

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      {error && <p>{error.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        submitting={isSubmitting}
      />
    </Stack>
  );
}

export default NewPostPage;
