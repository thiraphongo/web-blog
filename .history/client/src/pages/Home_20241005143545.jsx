import SearchBar from "../components/SearchBar";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="box-title text-4xl py-8">
          <h2 className="text-slate-900 font-bold">Blogs</h2>
        </div>
        <SearchBar />
      </div>
      <section className="blog">
        <div className="container mx-auto py-4">
          <div className="row grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            <div className="col-auto ">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s"
                  alt=""
                  width="100%"
                />
                <div className="m4 flex flex-col py-4 px-4">
                  <span className="font-bold blog-post-title text-2xl">
                    Heading Title Blog
                  </span>
                  <span className="block test-gray-500 text-sm py-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam inventore officia omnis voluptate beatae eligendi
                    quia dolorem atque asperiores eius.
                  </span>
                  <div className="btn"><button className=" flex items-center text-primary text-base font-bold gap-x-2">Read More <FaArrowRight />
                  </button></div>

                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s"
                  alt=""
                  width="100%"
                />
                <div className="m4 flex flex-col py-4 px-4">
                  <span className="font-bold blog-post-title text-2xl">
                    Heading Title Blog
                  </span>
                  <span className="block test-gray-500 text-sm py-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam inventore officia omnis voluptate beatae eligendi
                    quia dolorem atque asperiores eius.
                  </span>
                  <div className="btn"><button className=" flex items-center text-primary text-base font-bold gap-x-2">Read More <FaArrowRight />
                  </button></div>

                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s"
                  alt=""
                  width="100%"
                />
                <div className="m4 flex flex-col py-4 px-4 text-primary">
                  <span className="font-bold blog-post-title text-2xl">
                    Heading Title Blog
                  </span>
                  <span className="block test-gray-500 text-sm py-2 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam inventore officia omnis voluptate beatae eligendi
                    quia dolorem atque asperiores eius.
                  </span>
                  <div className="btn"><button className=" flex items-center text-primary text-base font-bold gap-x-2">Read More <FaArrowRight />
                  </button></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
