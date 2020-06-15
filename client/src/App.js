import React from 'react';
import './App.css';
import ShopItem from './components/ShopItem';
import { StoreProvider } from './utils/GlobalState';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <ShopItem />
      </StoreProvider>
    </div>
  );
}

export default App;
