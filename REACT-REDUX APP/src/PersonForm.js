import React, { Component } from 'react';
import { connect } from 'react-redux';
class PersonForm extends Component {
  state = {
    name: '',
    age: 0,
  };
  onValueChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addPerson(this.state);
  };
  render() {
    return (
      <>
        <h1>In Person Form</h1>
        <form onSubmit={this.onFormSubmitHandler}>
          <div className='mb-3'>
            <label>Name</label>
            <input
              name={'name'}
              value={this.state.name}
              onChange={this.onValueChangeHandler}
              className='form-control'
            ></input>
          </div>
          <div>
            <label>Age</label>
            <input
              name={'age'}
              value={this.state.age}
              onChange={this.onValueChangeHandler}
              className='form-control'
            ></input>
          </div>
          <br />
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (payload) => dispatch({ type: 'PERSON_ADD', payload: payload }),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(PersonForm);
