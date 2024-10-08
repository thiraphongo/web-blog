import SearchBar from "../components/SearchBar";
import PostItem from "./PostItem";

// import img
import { useState } from "react";

const Post = () => {

    const [posts, setPosts] = useState('');

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="box-title text-4xl py-8">
          <h2 className="text-slate-900 font-bold">Blogs</h2>
        </div>
        <SearchBar />
      </div>
      <section className="post py-20">
        {posts.length > 0 ? <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {posts.map((data) => (
            <PostItem key={data.id} data={data}  />
          ))}
        </div> : <div className="container mx-auto"><h2>No post fouds</h2></div>
        }
      </section>
    </>
  );
};

export default Post;
