import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HompePage from './pages/homepage/homepage.component';

const HomePage = () => (
  <div>
    <h1>HOME PAGE</h1>
  </div>
);

const TopicsList = () => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={HompePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
