import { Link } from 'react-router-dom';

import classes from '../styles/Posts.module.css';

function Posts({ blogPosts }: any) {
  return (
    <ul className={classes.posts}>
      {blogPosts.map((post: any) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>
            <h2>{post.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
