import React from 'react'
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { removeQuote } from '../actions/quotes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Outline from 'react-icons/lib/ti/heart-outline'
import Heart from 'react-icons/lib/ti/heart'
import Remove from '../../src/remove.svg'
// import Edit from '../../src/edit.svg'


class Quote extends React.Component {
  state = {
    show: true
  }

  render() {
    let { id,quote, img, writer } = this.props.quote

    let heart = this.state.show ? <Outline /> : <Heart />;
    return (
      <div style={{ padding : 0}}>
        <Card style={{ border: 'none'}}>
          <CardImg width="100%" src={img} alt="Card image cap" height="300"/>
          <CardBody style={{ paddingTop: 5, paddingBottom: 0}}>
            <h5 style={{ margin: 0}}>{quote}</h5>
            <CardText style={{fontSize:20, marginBottom: 0}}>~{writer}</CardText>
            <div style={{ fontSize: '50px'}} onClick={()=> this.setState({show: !this.state.show})}>{heart}</div>
            <img src={Remove} alt="remove" height="50" style={{ verticalAlign: 'right'}} onClick = {() => this.props.removeQuote(id)}/>
          </CardBody>
        </Card>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    removeQuote : bindActionCreators(removeQuote, dispatch)
  }
}

export default connect (null, mapDispatchToProps)(Quote)
