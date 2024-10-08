import { Link } from "react-router-dom"
import Avartar from "../assets/avatar.png"
import { Dummy_Posts } from "../data"

const PostAuthor = () => {

  const [posts,setPosts] = useState(Dummy_Posts)

  return (
   <div className="box-avartar flex items-center py-6">
     <Link to={`/posts/users/sasdad`}>
        <div className="post-author-avatar">
            <img src={Avartar} alt="" width="40px" />
        </div>
    </Link>
    <div className="avar-detail px-4">
        <h4>By : User-Name</h4>
        <small>5 / 10 / 2567</small>
    </div>
   </div>
  )
}

export default PostAuthor