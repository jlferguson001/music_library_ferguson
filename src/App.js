import { useEffect, useState, useRef } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { DataContext} from'./context/DataContext';
import {SearchContext} from './context/SearchContext'

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState(
    "Search for Music! But only Good music!"
  );
  let [data, setData] = useState([]);
  let searchInput = useRef('')

  const API_URL = "https://itunes.apple.com/search?term=";

  // useEffect(() => {
  //   if (search) {
      
  //   }
  // }, [search]);

  //function to pass down to our searchbar passing two arguments one default event object the other represent the search term we will generate by typing in our searchbar
  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not Found");
      }
    };
    fetchData();
    // setSearch(term);
  };

  return (
    <div>
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
            {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
      
    </div>
  );
}

export default App;
