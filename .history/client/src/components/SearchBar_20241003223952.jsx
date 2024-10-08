import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div>
      <form className="w-4/6 relative">
      <div className="relative">
        <input type="search" placeholder="Type Here" className="w-full p-4 rounded-full border-2 border-slate-500" />
        <button><IoIosSearch />
        </button>
      </div>
      </form>
    </div>
  )
}

export default SearchBar;


