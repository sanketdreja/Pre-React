//MyThirdComponentProfit
import React, { Component } from 'react'
import ProfitLossBusinessLogic from './ProfitLossBusinessLogic'

class ProfitLoss extends Component{

    state={
        balance:0,
    }
    
    onexpense=()=>{  
        if (this.state.balance ===0) {
            return;
        }
        this.setState({balance:this.state.balance-1} )
      
    }

    profit=()=>{
        this.setState({balance:this.state.balance+1})
      
    }
    
render(){
    const{name}=this.props;
    return (
        <h1>
          <h1>  Balance :{this.state.balance}</h1>
            <button onClick={this.profit}> familyprofit</button>
            <button onClick={this.onexpense }>Family expense</button>        
            <ProfitLossBusinessLogic name="lakhan" profit={this.profit } onexpense={this.onexpense} />
            {/* <ProfitLossBusinessLogic name="lakhan" loss={this.loss}/> */}
        </h1> 

    );
}

}
export default ProfitLoss;





















// class ProfitLoss extends Component{
//     state ={
//         balance:0,
//     }
//     balanceIncrement=()=>{
//         this.setState({balance:this.state.balance+1})
//     }
//      render()
//      {
//        //  const{name}=this.props;
//          return (
//              <>
//                <h1>Parent</h1>
//                Balance ${this.state.balance}
//                <button onClick={this.balanceIncrement}>
//                    Family Profit
//                </button>
//                <ProfitLoss name="Lakhan" balanceIncrement={this.balanceIncrement}/>
//                <ProfitLoss name="Ankur" balanceIncrement={this.balanceIncrement}/>         
//              </>
             
//          )
         
//      }
// }

// export default ProfitLoss;