import PostAuthor from "../components/PostAuthor";
import Thumbnail from "../assets/blog_business.jpg";

const PostDetail = () => {
  return (
    <section className="post-details py-4">
      <div className="container mx-auto px-4">
        <div className="content single-post text-center">
          <h2 className="bg-primary text-white block w-1">BLOG</h2>
          <h1 className="py-4 text-3xl font-bold">Header Title Blog 01</h1>
          <div className="postdetail-thumbnail">
            <img src={Thumbnail} alt="" width="100%" />
          </div>
        </div>
        <p className=" py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum commodi
          fugiat velit unde tenetur vel molestias quisquam, maiores, voluptates
          iste sit esse maxime aliquam perferendis adipisci! Nisi minima minus,
          vero optio corporis veniam iure facilis exercitationem inventore!
          Necessitatibus maxime dolore delectus aperiam? Officiis, deleniti
          recusandae quae velit aperiam corporis eos quo sed dolorum. Esse
          dolores voluptates adipisci deserunt, explicabo dolore debitis dolorem
          dolorum, porro, totam incidunt. Rerum, dicta atque! Ad iure,
          voluptates tempora fuga provident reiciendis temporibus aliquam
          commodi recusandae repudiandae sunt consectetur nihil mollitia! Vero,
          molestias fugiat. Facere ea unde quae iure, labore culpa! Placeat ex
          possimus culpa officia?
        </p>
        <div className="post-header-detail">
          <div className="post-header avatar">
            <PostAuthor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
