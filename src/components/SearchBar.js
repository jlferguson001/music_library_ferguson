import { useState } from "react";
    function SearchBar(props) {
        let [searchTerm, setSearchTerm]= useState('')

        return (
            <form>
                <input type='text' placeholder='Enter a search term here!' />
                <button>Click Here to find your music!</button>
            </form>
        )
    }
    export default SearchBar;