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
        <div className="row grid grid-cols-3 gap-5">
          <div className="col px-4 py-4 ">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s" alt=""  width="100%"  />
                <div className="m4 flex flex-col text-center">
                  <span className="font-bold blog-post-title">
                    Heading Title Blog
                  </span>
                  <span className="font-bold blog-post-meta">
                    5/10/2567
                  </span>
                  <span className="block test-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sed!
                  </span>
                </div>
            </div>
          </div>
          <div className="col px-4 py-4 ">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s" alt=""  width="100%"  />
                <div className="m4 flex flex-col text-center">
                  <span className="font-bold blog-post-title">
                    Heading Title Blog
                  </span>
                  <span className="font-bold blog-post-meta">
                    5/10/2567
                  </span>
                  <span className="block test-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sed!
                  </span>
                </div>
            </div>
          </div>
          <div className="col px-4 py-4 ">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s" alt=""  width="100%"  />
                <div className="m4 flex flex-col text-center">
                  <span className="font-bold blog-post-title">
                    Heading Title Blog
                  </span>
                  <span className="font-bold blog-post-meta">
                    5/10/2567
                  </span>
                  <span className="block test-gray-500 text-sm">
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
