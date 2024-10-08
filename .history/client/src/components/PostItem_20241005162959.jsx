import { Link } from "react-router-dom";

const PostItem = (props) => {
  

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
      <p>{desc}</p>
    </div>
  );
};

export default PostItem;
