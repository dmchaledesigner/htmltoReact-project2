import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';


// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>

      <Router>

        <Navbar />

        <Switch>

          <Route exact path='/' component={Home} />

        </Switch>


      </Router>

    </React.Fragment>
  );
}

export default App;
