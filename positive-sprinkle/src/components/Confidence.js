import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Row, Col, Container, Card, CardImg, CardBody } from 'reactstrap'
import '../../src/index.css'

class Motivation extends Component{
  render(){
    let hello = this.props.quotes.filter(quote => quote.category_id ===  3)
    let bye = hello.map( quote => {
      return (
        <Col key={quote.id} xs="6">
          <div className="card" >
            <Card style={{ border: '100px', outline: 'none'}}>
              <CardImg top width="100%" src={quote.img} alt="Card image cap" height="300" />
              <CardBody style={{ paddingBottom: 0}}>
                <h5>"{quote.quote}"</h5>
                <p style={{fontSize: '18px', padding: 0}}>~{quote.writer}</p>
              </CardBody>
            </Card>
          </div>
        </Col>

      )
    })

  return (
    <div style={{marginTop: 40}}>
      <Container>
        <Row>
          {bye}
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
export default connect(mapStateToProps, null)(Motivation)
