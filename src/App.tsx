import { useState } from 'react';
import './App.css';
import { CountryList } from './componets/CountryList';
import { Header } from './componets/Header';
import { NavBar } from './componets/Navbar';

function App() {
  const [sortBy, setsortBy] = useState("assending")
  const [page, setPage] = useState(0)
  return (
    <div className="App">
      <Header />
    <NavBar setsortBy={setsortBy} page={page} />
    <CountryList sortBy={sortBy} />
    </div>
  );
}

export default App;
