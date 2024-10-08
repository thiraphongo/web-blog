import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor"

const PostItem = (props) => {
  const { data } = props;

  const shortDesc = data.desc.length > 145 ? data.desc.substr(0,140) + '...' : data.desc;
  const postTitle = data.title.length > 30 ? data.title.substr(0,30) + '...' : data.title


  return (
    <div className="post-item ">
      <div className="post-thumbnail">
        <img src={data.thumbnail} alt={data.title} />
      </div>
      <div className="post-contant py-4">
        <Link to={`/posts/${data.id}`}>
          <h3 className="font-bold text-primary text-2xl">{postTitle}</h3>
        </Link>
      </div>
      <p>{shortDesc}</p>
      <div className="post-footer flex items-center justify-between">
        <PostAuthor />
        <Link className="btn btn-author-category" to={`/posts/categories/${data.category}`}>{data.category}</Link>
      </div>
    </div>
  );
};

export default PostItem;
