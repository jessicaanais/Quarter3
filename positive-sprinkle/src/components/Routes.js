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
import EditQuote from './EditQuote'
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
      <div>
        <Router>
          <div>
          <div style={{ backgroundColor: '#eff1f4'}}>
          <ButtonGroup size="lg" style = {{paddingTop: 10, paddingBottom: 15}}>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/">Home</Link></Button>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/viewquotes">View All Quotes</Link></Button>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/Motivation">Motivation</Link></Button>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/Relationships">Relationships</Link></Button>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/Confidence">Confidence</Link></Button>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/Family">Family</Link></Button>
            <Button style= {{marginRight: 20, backgroundColor: '#eff1f4', border: 0}}><Link style ={{color:'black', textDecoration:'none'}} to="/Life">Life</Link></Button>
          </ButtonGroup>

          <Button onClick ={()=> this.setState({ show: !this.state.show})}> + </Button>

          {this.state.show && <Container>
            <Row>
              <Col>
                <QuoteInput />
              </Col>
            </Row>
          </Container>}
          </div>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/viewquotes" component={Allquotes}/>
              <Route exact path="/Motivation" component={Motivation}/>
              <Route exact path="/Relationships" component={Relationships}/>
              <Route exact path="/Confidence" component={Confidence}/>
              <Route exact path="/Family" component={Family}/>
              <Route exact path="/Life" component={Life}/>
              <Route exact path="/edit/:id" component={EditQuote}/>
            </Switch>

          </div>
        </Router>
    </div>
    );
  }
}



export default Routes
