import { useState } from 'react';
import './App.css';
import { CountryList } from './CountryList';
import { Header } from './Header';
import { NavBar } from './Navbar';

function App() {
  const [sortBy, setsortBy] = useState("assending")
  const [page, setPage] = useState(0)
  return (
    <div className="App">
    {/* header */}
      <Header />
    {/* navbar */}
    <NavBar setsortBy={setsortBy} page={page} />
    {/* list renderrer */}
    <CountryList sortBy={sortBy} />
    </div>
  );
}

export default App;
