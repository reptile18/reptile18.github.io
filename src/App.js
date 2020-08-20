import React from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
          <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
