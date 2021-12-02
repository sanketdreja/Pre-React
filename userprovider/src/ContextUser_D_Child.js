import React, { Component } from 'react';

import { UserConsumer } from './UserContext';

export default class ContextUser_D_Child extends Component{
    render(){
        return(
            <>
              <h1>I'm in ContextUser_D_Child</h1>
              <UserConsumer>
              {(value) =>{
                    return(
                        <h2>
                           Heyyy hiiii im in Last__D__ Component ,name is<h1> {value.name}</h1> and my employee id is{" "}
                            {value.id}{" "} and password is{value.password}{" "}
                        </h2>
                    );
                }}

              </UserConsumer>
            </>
        )
    }
}