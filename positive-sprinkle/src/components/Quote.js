import React from 'react'
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

const Quote = (props) => {
  console.log(props)
  let { quote, img, writer } = props.quote
  return (
    <div>
      <Card style={{borderRadius: 20, marginTop: 10}}>
        <CardImg style={{borderRadius: 10}} top width="100%" src={img} alt="Card image cap" height="300" />
        <CardBody>
          <CardText style={{fontSize:15}}>{quote}</CardText>
          <CardText style={{fontSize:13}}>-{writer}</CardText>
        </CardBody>
      </Card>
    </div>

  )
}

export default Quote
