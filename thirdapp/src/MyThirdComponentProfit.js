//MyThirdComponentProfit
import { Component } from "react";



class MyThirdComponentProfit extends Component{
    state ={
        balance:40000,
    }

    balanceIncrement=(value)=>{
        this.setState({balance:this.state.balance+value})
    }

     onclickProfitHandler=()=>{
         console.log("I am clicked naow");
         this.balanceIncrement(1);
     }

     onclickDoubleProfitHandler=()=>{
         console.log("I am clicked naow");
         this.balanceIncrement(100);
       
         

     }
    
     render()
     {
         const{name,age}=this.props;
         return (
             <>
                <h1>
                    Hello I am {name},{age} years old my balancd is {this.state.balance} in account {this.props.accountNumber}
                </h1>
                <button onClick={this.onclickProfitHandler}>
                   profit
                </button>
                <button onClick={this.onclickDoubleProfitHandler}>
                   double profit
                </button>
                <h1>
                    Hello I am {name},{age} years old my balancd is {this.state.balance}
                </h1>
                <button onClick={this.onclickProfitHandler}>
                   profit
                </button>
                <button onClick={this.onclickDoubleProfitHandler}>
                   double profit
                </button>
             </>
         )
     }
}

export default MyThirdComponentProfit;