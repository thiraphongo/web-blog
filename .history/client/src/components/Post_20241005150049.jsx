import SearchBar from "../components/SearchBar";
import PostItem from "./PostItem";

// import img
import Thumbnail from "../assets/blog_business.jpg";
import { useState } from "react";

const Post = () => {

  const Dummy_Posts = [
    {
      id: 1,
      thumbnail: Thumbnail,
      catagory: "Blog",
      title: "Heading Title Blog 01",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam inventore officia omnis voluptate beatae eligendi
                    quia dolorem atque asperiores eius.`,
      authorID: 1,
    },
    {
      id: 2,
      thumbnail: Thumbnail,
      catagory: "Blog",
      title: "Heading Title Blog 02",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam inventore officia omnis voluptate beatae eligendi
                    quia dolorem atque asperiores eius.`,
      authorID: 2,
    },
    {
      id: 3,
      thumbnail: Thumbnail,
      catagory: "Blog",
      title: "Heading Title Blog 03",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam inventore officia omnis voluptate beatae eligendi
                    quia dolorem atque asperiores eius.`,
      authorID: 3,
    },
  ];

  const [posts, setPosts] = useState(Dummy_Posts);

  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="box-title text-4xl py-8">
          <h2 className="text-slate-900 font-bold">Blogs</h2>
        </div>
        <SearchBar />
      </div>
      <section className="post">
        <div className="container mx-auto py-20">
          <div className="row grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div className="col-auto ">
              <div className="card">
                {posts.map((data) => (
                  <PostItem key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
