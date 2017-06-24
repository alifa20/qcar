import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Search from '../search'
import About from '../about'
import Header from '../../components/common/Header'
const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
    </main>
  </div>
)
export default App