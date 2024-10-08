import { useState } from "react"
import { Dummy_Posts } from "../data"
import PostItem from "../components/PostItem"

const AuthorPosts = () => {

  const [posts,setPosts] = useState(Dummy_Posts)

  return (
    <section className="author-post py-20">
    {posts.length > 0 ? <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      {posts.map((data) => (
        <PostItem key={data.id} data={data}  />
      ))}
    </div> : <div className="container mx-auto"><h2 className="text-4xl font-bold text-primary text-center">No post fouds</h2></div>
    }
  </section>
  )
}

export default AuthorPosts