import React, { Component } from 'react';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
export default class Person extends Component {
  render() {
    return (
      <>
        <h1>in Person Master</h1>

        <div className='row'>
          <div className='col-md-6'>
            <PersonForm />
          </div>

          <div className='col-md-4'>
            <PersonList />
          </div>
        </div>
      </>
    );
  }
}
