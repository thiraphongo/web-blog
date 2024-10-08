import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      <form className="w-4/6 relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Type Here"
            className="w-full p-4 rounded-full border-2 border-slate-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full text-white flex items-center justify-center gap-col-2">
          Search <FiSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;


