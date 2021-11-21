import logo from './logo.svg';
import './App.css';
import ProfitLossBusinessLogic from './ProfitLossBusinessLogic';
import ProfitLoss from './ProfitLoss';
import TrueComponent from './TrueComponent';
import FalseComponent from './FalseComponent';
import ConditionalComponet from './ConditionalComponent';

function App() {
  const  name="lakhan";
  return (
    <div>
      <h1>from app</h1>



      <ConditionalComponet/>
      {/* {
        name==="lakhan"?<TrueComponent/>:<FalseComponent/>
      } */}
      {/* {
        name==="lakhan"&& <TrueComponent/>   //&& operator
      } */}

    {/* <ProfitLoss name="lakhan" age="25"  />
    <ProfitLoss name="lakhan" age="25"  /> */}
    </div>
  );
}

export default App;
