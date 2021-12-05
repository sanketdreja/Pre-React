import { Component } from 'react';
import { createStore } from 'redux';

const initialState = {
  personList: [],
  courseList: [],
};
//reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const personListCopy = [...state.personList];
  const courseListCopy = [...state.courseList];
  switch (type) {
    case 'PERSON_ADD':
      console.log(payload);
      // const personListCopy = [...state.personList];
      personListCopy.push(payload);

      return {
        ...state,
        personList: personListCopy,
      };
    case 'PERSON_DELETE':
      personListCopy.splice(payload, 1);
      alert('deleted');

      return {
        ...state,
        personList: personListCopy,
      };
    case 'COURSE_ADD':
      console.log(payload);
      // const personListCopy = [...state.personList];
      courseListCopy.push(payload);

      return {
        ...state,
        courseList: courseListCopy,
      };
    case 'COURSE_DELETE':
      courseListCopy.splice(payload, 1);
      alert('deleted');

      return {
        ...state,
        courseList: courseListCopy,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
