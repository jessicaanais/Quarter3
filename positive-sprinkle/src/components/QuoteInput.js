import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { addQuotes } from '../actions/quotes'
import { connect } from 'react-redux'

class QuoteInput extends Component {
  state = {
    quote: '',
    img: '',
    writer: '',
    category_id: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addQuotes(this.state)
    this.props.history.push('/viewquotes')
  }
  render() {
    return (
      <div style={{paddingBottom: 15}}>
      <Form onSubmit={this.handleSubmit} style={{marginTop: 15}}>
      <Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <FormGroup>
        <Label for="category">Category</Label>
        <Input
          type="select"
          id=""
          value={this.state.category_id}
          onChange={(e) => this.setState({category_id: e.target.value})}
        >
          <option value="1">Motivation</option>
          <option value="2">Relationships</option>
          <option value="3">Confidence</option>
          <option value="4">Family</option>
          <option value="5">Life</option>
        </Input>
      </FormGroup>
      </Col>
      </Row>
        <Row>
        <Col>
        <FormGroup>
          <Label for="quote">Quote</Label>
          <Input type="text" name="text" id="" onChange = {(e) => this.setState({ quote: e.target.value })} value = {this.state.quote}>
          </Input>
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label for="writer">Writer</Label>
          <Input type="text" name="text" id="" onChange = {(e) => this.setState({ writer: e.target.value })} value = {this.state.writer}/>
        </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <FormGroup>
          <Label for="img">Image</Label>
          <Input type="text" name="category" id="" onChange = {(e) => this.setState({ img: e.target.value })} value = {this.state.img}>
          </Input>
        </FormGroup>
        </Col>
        </Row>
        <Button> Add Quote </Button>
      </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    addQuotes: bindActionCreators(addQuotes, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(QuoteInput)
