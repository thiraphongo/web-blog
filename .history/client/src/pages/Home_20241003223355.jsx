import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="box-title text-4xl py-4">
        <h2 className="text-slate-900 ">
          Blogs
        </h2>
      </div>
      <SearchBar />
      </div>
  );
};

export default Home;
