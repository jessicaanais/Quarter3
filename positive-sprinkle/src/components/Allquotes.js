import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Row, Col, Container } from 'reactstrap'
import Quote from './Quote'

class Allquotes extends Component{
  render(){
  let theQuotes = this.props.quotes.map( quote => {
    return (
      <Col key={quote.id} xs="3">
        <Quote quote={quote} />
      </Col>
    )
  })
  return (
    <div>
      <Container>
        <Row>
        {theQuotes}
        </Row>
      </Container>
    </div>
  )
}
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  }
}
export default connect(mapStateToProps, null)(Allquotes)
