import React, { Component } from 'react';
import ContextUser_B_Child from './ContextUser_B_Child';
export default class ContextUser_A_Child extends Component{
    render(){
        return(
            <>
            <h1>I'm in ContextUser_A_Child</h1>
             <ContextUser_B_Child /> 
            </>
        )
    }
}