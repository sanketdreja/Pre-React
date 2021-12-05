import React, { Component } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
export default class Course extends Component {
  render() {
    return (
      <>
        <h1>Im in Course master</h1>

        <div className='row'>
          <div className='col-md-6'>
            <CourseForm />
          </div>

          <div className='col-md-4'>
            <CourseList />
          </div>
        </div>
      </>
    );
  }
}
