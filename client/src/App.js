import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import ShopItem from './components/ShopItem';
import { StoreProvider } from './utils/GlobalState';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Nav />
          <ShopItem />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
