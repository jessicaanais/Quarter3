import React from 'react'
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';
import { removeQuote } from '../actions/quotes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Quote = (props) => {
  let { id, quote, img, writer } = props.quote
  return (
    <div>
      <Card style={{marginTop: 8}}>
        <CardImg width="100%" src={img} alt="Card image cap" height="275"  />
        <CardBody>
          <h5>{quote}</h5>
          <CardText style={{fontSize:13}}>-{writer}</CardText>
          <Button onClick = {() => props.removeQuote(id)}> Remove </Button>
        </CardBody>
      </Card>
    </div>

  )
}

function mapDispatchToProps(dispatch){
  return {
    removeQuote : bindActionCreators(removeQuote, dispatch)
  }
}

export default connect (null, mapDispatchToProps)(Quote)
