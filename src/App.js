import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Home from './Component/Home'
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Redirect to="/" component={Home}/>
          <Home />
        </Switch>
    </React.Fragment>
  );
}

export default App;
