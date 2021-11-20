import React, { Component } from 'react'


class MySecondClassComponet extends Component{
    state={
        balance:0,
    }
    render(){
     const {name,age}=this.props;
     return (
     <h1>
         hello I am {name}  ,{age} years old my balance is {" "}
         {this.state.balance}
     </h1>
    
     );
     }
}
export default  MySecondClassComponet