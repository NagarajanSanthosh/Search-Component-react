import { SearchComponent } from "./Components/SearchComponent";
import { SearchResults} from "./Components/SearchResultsList"
import "./App.css";
import { useState } from "react";

const App= () => {
  const [results, setResults] = useState([])
  return (
    <div className='App'>
      <div className="search-bar-container">
        <SearchComponent setResults ={setResults}/>
        
        <SearchResults results = {results}/>
      </div>
    </div>
  )
}

export default App
