import { useState } from "react";
import { Dummy_Posts } from "../data";
import PostItem from "./PostItem";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(Dummy_Posts);

  return (
    <section className="author-post py-20">
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {posts.map((data) => (
            <PostItem key={data.id} data={data} />
          ))}
        </div>
    </section>
  );
};

export default AuthorPosts;
