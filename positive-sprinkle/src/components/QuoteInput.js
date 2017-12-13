import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

export default class Example extends React.Component {
  state = {
    quote: '',
    writer: '',
    image: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{marginTop: 15}}>
      <Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <FormGroup>
        <Label for="category">Category</Label>
        <Input type="select" id="">
          <option>1</option>
          <option>2</option>
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
          <Label for="image">Image</Label>
          <Input type="text" name="category" id="" onChange = {(e) => this.setState({ image: e.target.value })} value = {this.state.image}>
          </Input>
        </FormGroup>
        </Col>
        </Row>
        <Button type="submit"> + </Button>
      </Form>
    );
  }
}
