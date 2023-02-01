function BlogPost({ title, text }: any) {
  return (
    <article >
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default BlogPost;
