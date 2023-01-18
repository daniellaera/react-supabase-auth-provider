import classes from '../styles/BlogPost.module.css';

function BlogPost({ title, text }: any) {
  return (
    <article className={classes.post}>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default BlogPost;
