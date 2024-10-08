import {Link} from "react-router-dom"

const PostItem = (props) => {
  const { data } = props;

  return (
    <div className="container mx-auto py-20">
      <div className="row grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="col-auto ">
          <div className="post-thumbnail">
            <img src={data.thumbnail} alt={data.title} />
          </div>
          <div className="post-contant">
            <Link to={`/posts/${data.id}`} >
            <h3>{data.title}</h3>
            </Link>
          </div>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
