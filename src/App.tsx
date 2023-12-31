import { useState } from 'react';
import './styles/App.css';
import { CountryList } from './componets/CountryList';
import { Header } from './componets/Header';
import { NavBar } from './componets/Navbar';

function App() {
  const [sortBy, setsortBy] = useState("ascending")
  return (
    <div className="App">
      <Header />
    <NavBar setsortBy={setsortBy} />
    <CountryList sortBy={sortBy} />
    </div>
  );
}

export default App;
