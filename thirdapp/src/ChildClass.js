//MyThirdComponentProfit
import { Component } from "react";

class ChildClass extends Component{
     
     render()
     {
         const{name,balanceIncrement}=this.props;
         return (
             <>
             <div>
               <h1>Child</h1>{name}               
               <button onClick={balanceIncrement}>
               Child profit $
               </button>
            </div>
             </>
         )
     }
}

export default ChildClass;