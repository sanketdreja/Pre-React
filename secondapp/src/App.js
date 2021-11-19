import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';

function App() {
  const name = "Lakhan";
  return (
    <div>
      <h1> Hello {name && name.length ? name :"World React"} </h1>
      {/* <h2>{1 + 2}</h2> */}
{/* 
      <MyFirstComponent name = {name} age = {26}>
      <h2> Addedd Data from App Component i.e. Parent Component</h2>
      </MyFirstComponent> */}
      <MyFirstComponent
      parentComponentName = {"App"}>


      </MyFirstComponent >

    {/*  <MySecondComponent name = {name} age = {26} /> */}
    <MySecondComponent
      parentComponentName = {"App"}>


      </MySecondComponent >
         
    
    </div>
  );
}

export default App;
