import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor"

const PostItem = (props) => {
  const { data } = props;

  return (
    <div className="post-item py-20">
      <div className="post-thumbnail">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="post-contant py-4">
        <Link to={`/posts/${data.id}`}>
          <h3 className="font-bold text-primary text-2xl">{data.title}</h3>
        </Link>
      </div>
      <p>{data.desc}</p>
      <div className="post-footer py-2">
        <PostAuthor />
        {/* <Link to={`/posts/categories/${data.category}`}>{data.category}</Link> */}
      </div>
    </div>
  );
};

export default PostItem;
