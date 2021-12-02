import React, { Component } from 'react';
import ContextUser_D_Child from './ContextUser_D_Child';


export default class ContextUser_C_Child extends Component{
    render()
    {
        return(
            <>
            <h1>I'm in ContextUser_C_Child</h1>
            <ContextUser_D_Child />
            </>
        )
    }
} 
