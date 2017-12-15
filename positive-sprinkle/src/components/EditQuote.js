import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { editQuotes } from '../actions/quotes'
import { Label, Form, Container} from 'reactstrap'

class EditQuote extends Component {
  theQuote = (values) => {
    console.log('vals', this.props);
    this.props.editQuotes(values)
    this.props.history.push('/viewquotes')
  }
  render(){
    console.log('props', this.props);
    const { handleSubmit } = this.props
    return (
      <Container style={{ marginTop: "4%", padding: 100}}>
      <div style={{ backgroundColor: "#EFF1F4"}}>
      <Form onSubmit={handleSubmit(this.theQuote)} style={{padding: 100}}>
        <div>
           <Label for="quote">Quote :</Label>
           <Field
              name="quote"
              component="input"
              type="text"
              />
         </div>
         <div>
           <Label for="writer">Writer :</Label>
           <Field
             style={{fontSize: 200}}
              name="writer"
              component="input"
              type="text"
             />
         </div>
         <div>
           <Label for="img">Image :</Label>
           <Field
              name="img"
              component="input"
              type="text"
               />
         </div>
         <button type="submit"> Update </button>
      </Form>
      </div>
      </Container>
    )
  }
}

EditQuote = reduxForm({
  form: 'quote_edit'
})(EditQuote)

function mapStateToProps(store, props){
  console.log("HELP", store.quotes.filter(quote => quote.id == props.match.params.id)[0])
  return {
    initialValues : store.quotes.filter(quote => quote.id == props.match.params.id)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editQuotes: bindActionCreators(editQuotes, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditQuote);
