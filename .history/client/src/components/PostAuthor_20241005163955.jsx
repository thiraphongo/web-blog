import { Link } from "react-router-dom"
import Avartar from "../assets/avatar.png"

const PostAuthor = () => {
  return (
   <div className="box-avartar flex items-center">
     <Link to={`/posts/users/sdfsdf`}>
        <div className="post-author-avatar">
            <img src={Avartar} alt="" width="40px" />
        </div>
    </Link>
    <div className="avar-detail px-4">
        <h4>By : User-Name</h4>
    </div>
   </div>
  )
}

export default PostAuthor