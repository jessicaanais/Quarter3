import React, { Component } from 'react';
import Main from './Main.js'
import Allquotes from './Allquotes'
import Confidence from './Confidence'
import Family from './Family'
import Life from './Life'
import Motivation from './Motivation'
import Relationships from './Relationships'
import { ButtonGroup, Button, Container, Row, Col } from 'reactstrap'
import QuoteInput from './QuoteInput'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Routes extends Component {
  state = {
    show:false
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <ButtonGroup size="lg" style = {{paddingTop: 10}}>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/">Main</Link></Button>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/viewquotes">View All Quotes</Link></Button>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/Motivation">Motivation</Link></Button>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/Relationships">Relationships</Link></Button>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/Confidence">Confidence</Link></Button>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/Family">Family</Link></Button>
            <Button style= {{marginRight: 20, borderRadius: 10, backgroundColor: '#D9B291', borderWidth: 2, borderColor: '#978379'}}><Link style ={{color:'#183452', textDecoration:'none'}} to="/Life">Life</Link></Button>
          </ButtonGroup>

          <Button onClick ={()=> this.setState({ show: !this.state.show})}> + </Button>

          {this.state.show && <Container>
            <Row>
              <Col>
                <QuoteInput />
              </Col>
            </Row>
          </Container>}


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



export default Routes
