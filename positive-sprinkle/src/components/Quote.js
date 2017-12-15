import React from 'react'
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { removeQuote } from '../actions/quotes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Outline from 'react-icons/lib/ti/heart-outline'
// import Heart from 'react-icons/lib/ti/heart'
import Remove from '../../src/remove.svg'
// import Edit from '../../src/edit.svg'


const Quote = (props) => {
  let { id,quote, img, writer } = props.quote
  return (
    <div style={{ padding : 0}}>
      <Card style={{ border: 'none'}}>
        <CardImg width="100%" src={img} alt="Card image cap" height="300"/>
        <CardBody>
          <h5>{quote}</h5>
          <CardText style={{fontSize:13}}>-{writer}</CardText>
          <img src={Remove} alt="remove" height="50" style={{ verticalAlign: 'right'}} onClick = {() => props.removeQuote(id)}/>
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
