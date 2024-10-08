import {Link} from "react-router-dom"

const PostItem = ({postID,thumbnail,category,title,desc}) => {
  

  return (
    <div className="post-item py-20">
          <div className="post-thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="post-contant py-4">
            <Link to={`/posts/${postID}`} >
            <h3 className="font-bold text-primary text-2xl">{title}</h3>
            </Link>
          </div>
          <p>{desc}</p>
      </div>
  );
};

export default PostItem;
