import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getQuotes } from './actions/quotes';
import './App.css';
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Footer from './components/Footer'

class App extends Component {
  componentDidMount(){
    this.props.getQuotes();
  }
  render() {

    return (
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    getQuotes: bindActionCreators(getQuotes, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
