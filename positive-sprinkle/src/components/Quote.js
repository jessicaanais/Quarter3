import React from 'react'
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';
import { removeQuote } from '../actions/quotes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Quote = (props) => {
  let { id, quote, img, writer } = props.quote
  return (
    <div>
      <Card style={{borderRadius: 20, marginTop: 10}}>
        <CardImg style={{borderRadius: 10}} top width="100%" src={img} alt="Card image cap" height="300" />
        <CardBody>
          <CardText style={{fontSize:15}}>{quote}</CardText>
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
