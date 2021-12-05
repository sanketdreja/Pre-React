import React, { Component } from 'react';
import { connect } from 'react-redux';
class CourseForm extends Component {
  state = {
    course: '',
    fees: 0,
  };
  onValueChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addCourse(this.state);
  };
  render() {
    return (
      <>
        <h1>Im in CourseForm</h1>
        <form onSubmit={this.onFormSubmitHandler}>
          <div>
            <label>Course</label>
            <input
              name={'course'}
              value={this.state.course}
              onChange={this.onValueChangeHandler}
              className='form-control'
            ></input>
          </div>

          <div>
            <label>Fees</label>
            <input
              name={'fees'}
              value={this.state.fees}
              onChange={this.onValueChangeHandler}
              className='form-control'
            ></input>
          </div>
          <button type='submit' className='btn btn-success'>
            {' '}
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
    addCourse: (payload) => dispatch({ type: 'COURSE_ADD', payload: payload }),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(CourseForm);
