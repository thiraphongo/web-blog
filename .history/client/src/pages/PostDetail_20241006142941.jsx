import PostAuthor from "../components/PostAuthor";


const PostDetail = () => {
  return (
    <section className="post-details">
      <div className="container mx-auto">
        <div className="post-single-detail">
          <div className="post-header avatar">
              <PostAuthor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
