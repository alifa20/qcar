import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home';
import Search from '../search';
import Car from '../car';
import Header from '../../components/common/Header'
const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/make/model/:id" component={Car} />
    </main>
  </div>
)
export default App