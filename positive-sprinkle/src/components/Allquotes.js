import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Row, Col, Input } from 'reactstrap'
import Quote from './Quote'
import Edit from '../../src/edit.svg'

class Allquotes extends Component{
  constructor(){
    super();
    this.state = {
      search : ''
    }
  }
  updateSearch(event) {
    this.setState({ search: event.target.value})
  }
  render(){
  let filteredQuotes = this.props.quotes.filter(
      (quote) => {
        return quote.quote.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
  let theQuotes = filteredQuotes.map( quote => {
    return (
      <Col key={quote.id} xs="6" sm="4" style={{ border: ' 1px solid'}}>
        <Quote quote={quote} />
          <img src={Edit} alt="edit" height='45' onClick={() => this.props.history.push('/edit/' + quote.id)} />
      </Col>
    )
  })
  return (
    <div style={{ marginTop: '2%', marginBottom: '2%'}}>
      <div >
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Input type="text" placeholder="Search . . ."
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            style={{ height: 50, fontSize: '40px', marginBottom: 25}}
            />
          </Col>
        </Row>
      </div>
      <div style={{padding: 0, marginRight: '10%', marginLeft: '10%'}}>
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
