import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
//   let [searchTerm, setSearchTerm] = useState("");
const {term, handleSearch} = useContext(SearchContext)

  return (
    <form>
      <input type="text" placeholder="Enter a search term here!" ref={term} />
      <button onClick={(e) => handleSearch(e, term.current.value)}>
        Click Here to find your music!
      </button>
    </form>
  );
}
export default SearchBar;
