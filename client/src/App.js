import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import { StoreProvider } from './utils/GlobalState';
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import SearchAndFilter from './components/SearchAndFilter';

function App() {
  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Nav />
          <SearchAndFilter />
          <MainPage />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
