import React, { Component } from 'react';
import { connect } from 'react-redux';
import Course from './Course';
class CourseList extends Component {
  render() {
    console.log(this.props.courseList);
    return (
      <>
        <h1>Im in Course List</h1>
        <table className={'table'}>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Course Name</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courseList.map((course, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.course}</td>
                  <td>{course.fees}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        this.props.deleteCourseById(index);
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.courseList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCourseById: (index) =>
      dispatch({ type: 'COURSE_DELETE', payload: index }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
