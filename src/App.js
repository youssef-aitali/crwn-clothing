import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HompePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Route exact path='/' component={HompePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
