import PostAuthor from "./PostAuthor";
import Thumbnail from "../assets/blog_business.jpg";

const PostDetail = () => {
  return (
    <section className="post-details">
      <div className="container mx-auto px-4 py-4">
        <div className="post-header-detail">
          <div className="post-header avatar">
              <PostAuthor />
          </div>
        </div>
        <div className="content single-post">
          <h1>header Title Blog 01</h1>
          <div className="postdetail-thumbnail">
            <img src={Thumbnail} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
