import { Link } from "react-router-dom"
import Avartar from "../assets/avatar.png"

const PostAuthor = () => {
  return (
   <div className="box-avartar">
     <Link to={`/posts/users/sdfsdf`}>
        <div className="post-author-avatar">
            <img src={Avartar} alt=""  />
        </div>
    </Link>
    <div className="avar-detail">
        
    </div>
   </div>
  )
}

export default PostAuthor