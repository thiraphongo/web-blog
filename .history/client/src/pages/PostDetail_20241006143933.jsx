import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <section className="post-details">
      <div className="container mx-auto px-4 py-4">
        <div className="post-single-detail">
          <div className="post-header avatar">
          <div className="post-footer flex items-center justify-between">
        <PostAuthor />
        <Link className="btn btn-author-category" to={`/posts/categories/${data.category}`}>{data.category}</Link>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
