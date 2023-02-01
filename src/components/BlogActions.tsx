import { Link } from 'react-router-dom';
import { Button , Stack} from 'rsuite';

function BlogActions() {
  return (
    <Stack direction="column" spacing={20} alignItems="center" style={{ marginTop: 30 }}>
      <Button to="/blog/new" as={Link} appearance="primary">Add Post</Button>
    </Stack>
  );
}

export default BlogActions;
