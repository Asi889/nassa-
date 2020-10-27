import React from 'react';
import Favorites from './components/Favorites';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Search from './components/Search';
// import Media from './components/Media';


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
      <NavBar />
      <Route path='/home' exact render={() => <Home />}/>
      <Route path='/search' exact render={() => <Search />}/>
      <Route path='/favorites' exact render={() => <Favorites />}/>
      <Route path='/favorite1/:id' exact render={({ match }) => <Favorites match={match} />}/>
        
      </div>
    </Router>
  );
}

export default App;
