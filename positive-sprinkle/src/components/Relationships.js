import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Row, Col, Container, Card, CardImg, CardText, CardBody } from 'reactstrap'


class Motivation extends Component{
  render(){
    let hello = this.props.quotes.filter(quote => quote.category_id ===  2)
    let bye = hello.map( quote => {
      return (
        <Col key={quote.id} xs="4">
          <div>
            <Card style={{borderRadius: 20, marginTop: 10}}>
              <CardImg style={{borderRadius: 10}} top width="100%" src={quote.img} alt="Card image cap" height="300" />
              <CardBody>
                <CardText style={{fontSize:15}}>{quote.quote}</CardText>
                <CardText style={{fontSize:13}}>-{quote.writer}</CardText>
              </CardBody>
            </Card>
          </div>
        </Col>

      )
    })

  return (
    <div>
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
