import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="box-title text-4xl py-8">
        <h2 className="text-slate-900 font-bold">
          Blogs
        </h2>
      </div>
      <SearchBar />
      <div className="container py-4">
        <div className="row grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="col ">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s" alt=""  width="100%"  />
                <div className="m4 flex flex-col py-4 px-4">
                  <span className="font-bold blog-post-title">
                    Heading Title Blog
                  </span>
                  <span className="font-bold text-sm blog-post-meta py-1">
                    5/10/2567
                  </span>
                  <span className="block test-gray-500 text-sm py-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sed!
                  </span>
                </div>
            </div>
          </div>
          <div className="col  ">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s" alt=""  width="100%"  />
                <div className="m4 flex flex-col py-4 px-4">
                  <span className="font-bold blog-post-title">
                    Heading Title Blog
                  </span>
                  <span className="font-bold text-sm blog-post-meta py-1">
                    5/10/2567
                  </span>
                  <span className="block test-gray-500 text-sm py-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sed!
                  </span>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
  );
};

export default Home;
