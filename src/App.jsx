import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import  { searchBar }  from '../components/searchbar'
import SearchBar from './components/searchbar'
import SearchResultsList from './components/searchResultsList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [results, setResults] = useState([]);
  return (
    <>
      <div className="App">
      <h1>Welcome to Autocar</h1>
 
      
        <SearchBar setResults = {setResults} />
        <SearchResultsList/>
        </div>
    </>
  )
}

export default App
