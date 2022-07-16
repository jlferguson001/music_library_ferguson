import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";
import "./App.css";
import { useState, Suspense, useEffect } from "react";
import Spinner from "./components/Spinner";
import { createResource as fetchData } from "./helper";

function App() {
  let [searchTerm, setSearchTerm] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      document.title = `${searchTerm} Music`;
      console.log(fetchData(searchTerm));
      setData(fetchData(searchTerm));
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

   return (
    <div className="App">
      {message}
      <Router>
        <Route exact path={'/'}>
          <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
            <SearchBar />
          </SearchContext.Provider>
            <DataContext.Provider value={data}>
              {renderGallery()}
            </DataContext.Provider>
        </Route>
        <Route path="/album/:id">
          <AlbumView />
        </Route>
        <Route path="/artist/:id">
          <ArtistView />
        </Route>
      </Router>
    </div>
   )
     
  
}

export default App;
