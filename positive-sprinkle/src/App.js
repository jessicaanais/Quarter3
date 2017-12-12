import React, { Component } from 'react';
import './App.css';
import Main from './components/Main.js'
import Allquotes from './components/Allquotes'
import Confidence from './components/Confidence'
import Family from './components/Family'
import Life from './components/Life'
import Motivation from './components/Motivation'
import Relationships from './components/Relationships'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/viewquotes"> All Quotes</Link></li>
              <li><Link to="/Motivation"> Motivation </Link></li>
              <li><Link to="/Relationships"> Relationships </Link></li>
              <li><Link to="/Confidence"> Confidence </Link></li>
              <li><Link to="/Family"> Family </Link></li>
              <li><Link to="/Life"> Life </Link></li>
            </ul>

            <hr/>

            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/viewquotes" component={Allquotes}/>
              <Route exact path="/Motivation" component={Motivation}/>
              <Route exact path="/Relationships" component={Relationships}/>
              <Route exact path="/Confidence" component={Confidence}/>
              <Route exact path="/Family" component={Family}/>
              <Route exact path="/Life" component={Life}/>
            </Switch>
          </div>
        </Router>
    </div>
    );
  }
}

export default App;
