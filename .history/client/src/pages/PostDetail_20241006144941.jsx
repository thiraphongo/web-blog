import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../assets/blog_business.jpg";

const PostDetail = () => {
  return (
    <section className="post-details py-4">
      <div className="container mx-auto px-20">
        <div className="post-header-detail">
          <div className="post-header avatar">
            <PostAuthor />
          </div>
        </div>
        <div className="content single-post">
          <h1 className="py-4 text-2xl font-bold">header Title Blog 01</h1>
          <div className="postdetail-thumbnail">
            <img src={Thumbnail} alt="" width="100%" />
          </div>
        </div>
        <p className=" py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos omnis
          impedit consectetur vero facilis. Quod autem neque exercitationem
          aspernatur. Non mollitia doloribus facilis officiis veniam quisquam
          cupiditate rem consequatur velit.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
