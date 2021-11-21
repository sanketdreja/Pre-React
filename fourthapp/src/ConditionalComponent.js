import React, { Component } from 'react'

export default class ConditionalComponet extends Component{

state={
    showText:true,
}

onToggleShowText=()=>{
    this.setState({showText:!this.state.showText})
}

    render(){
        
        return(

            <>
            {/* <h1>{ && "From ConditionalComponet"}</h1> */}
            {this.state.showText && <h1>From ConditionalComponet</h1>}
            <div>
           <button  onClick={this.onToggleShowText}>{this.state.showText?"Hide":"show"}</button>

            </div>
            </>     
        )
    }
}