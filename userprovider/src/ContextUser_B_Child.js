import { Component } from "react";
import ContextUser_C_Child from "./ContextUser_C_Child";


export default class ContextUser_B_Child extends Component{
    render(){
        return(
            <>
            <h1>I'm in ContextUser_B_Child</h1>
            <ContextUser_C_Child />
            </>
        )
    }
}