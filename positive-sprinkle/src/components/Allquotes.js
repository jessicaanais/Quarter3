import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'
import Quote from './Quote'

class Allquotes extends Component{
  render(){
  let theQuotes = this.props.quotes.map( quote => {
    return (
      <Col key={quote.id} xs="6" sm="4" style={{ padding: 5}}>
        <Quote quote={quote} />
          <button
              onClick={() => this.props.history.push('/edit/' + quote.id)}
            >Edit me</button>
      </Col>
    )
  })
  return (
    <div style={{ marginTop: '2%', marginBottom: '2%'}}>
      <div style={{padding: 0, marginRight: '4%', marginLeft: '4%'}}>
        <Row>
        {theQuotes}
        </Row>
      </div>
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
