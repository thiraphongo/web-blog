import {Link} from "react-router-dom"

const PostItem = (props) => {
  const { data } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-auto ">
          <div className="post-thumbnail">
            <img src={data.thumbnail} alt={data.title} />
          </div>
          <div className="post-contant py-4">
            <Link to={`/posts/${data.id}`} >
            <h3 className="font-bold text-primary text-2xl">{data.title}</h3>
            </Link>
          </div>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
