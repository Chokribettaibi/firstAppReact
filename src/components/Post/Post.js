function Post({ title, content , children}) {
  return (
  
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </div>
  );
}

export default Post;