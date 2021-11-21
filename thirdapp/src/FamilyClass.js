//MyThirdComponentProfit
import { Component } from "react";
import ChildClass from "./ChildClass";



class FamilyClass extends Component{
    state ={
        balance:0,
    }
    balanceIncrement=()=>{
        this.setState({balance:this.state.balance+1})
    }
     render()
     {
       //  const{name}=this.props;
         return (
             <>
               <h1>Parent</h1>
               Balance ${this.state.balance}
               <button onClick={this.balanceIncrement}>
                   Family Profit
               </button>
               <ChildClass name="Lakhan" balanceIncrement={this.balanceIncrement}/>
               <ChildClass name="Ankur" balanceIncrement={this.balanceIncrement}/>         
             </>
             
         )
         
     }
}

export default FamilyClass;