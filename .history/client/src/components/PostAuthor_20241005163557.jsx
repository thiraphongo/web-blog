import { Link } from "react-router-dom"
import Avartar from "../assets/avatar.png"

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`}>
        <div className="post-author-avatar">
            <img src={Avartar} alt=""  />
        </div>
    </Link>
  )
}

export default PostAuthor