//MyThirdComponentProfit
import { Component } from "react";

class ProfitLossBusinessLogic extends Component{
    state={
        balance:0,
        
    } 
    onChildProfit=()=>{
        this.setState({balance:this.state.balance+1})
    }
    
    onclickLExpense=()=>{
        if (this.state.balance ===0) {
            return;
        }
        this.setState({balance:this.state.balance-1})

        
    }

     render()
     {
        
        const onProfitClick=()=>{
            this.onChildProfit();
            profit();
            
        }
        const onclickLExpense=()=>{
            this.onclickLExpense();
            onexpense();
           
        }
        const{name,profit,onexpense}=this.props;
         return (
             
             <>
             <div>
               
               <h2>{name}  balance {this.state.balance} </h2>           
               {/* <button onClick={profit}>Profit</button> */}
               <button onClick={onProfitClick}>Profit</button>
               <button onClick={onclickLExpense}>Loss </button>
            </div>
             </>
         )
     }
}

export default ProfitLossBusinessLogic;