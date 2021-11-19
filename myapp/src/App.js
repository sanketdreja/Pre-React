
// // import MyFirstComponent from "./MyFirstComponent1"
// // import MySecondComponent from "./MySecondComponent"
//  import MyFirstComponent1 from "./MyFirstComponent1"
// import MyFourthComponent from "./MyFourthComponent";
//  import MySecondComponent2 from "./MysecondComponent2"
// import MyThirdComponent from "./MyThirdComponent";



// function App() {
//   const name="lakhan";
//     return(
//       <div>
//         <h2>Hello {name && name.length ? name:"world"}</h2>
//             <div>
            
//             <MyThirdComponent name={name} age={25} parentcomponent={"App"}>
//               <h2>some data passed forom App componennt</h2>
//         </MyThirdComponent>
//         <MyFourthComponent name={name} age={25} parentcomponent={"App"}>
//               <h2>some data passed forom App componennt</h2>
//         </MyFourthComponent>



//             {/* <MySecondComponent2 name={name} age={29}/> */}
//             </div>
//         {/* <div>
//           <MySecondComponent2/>
//         </div> */}
//       </div>
//     );
// }
// export default App;
//--------------------------------------------------
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import MyThirdComponent from './MyThirdComponent';
import MyFourthComponent from './MyFourthComponent';
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
      <MyThirdComponent
      parentComponentName = {"App"}>


      </MyThirdComponent >

    {/*  <MySecondComponent name = {name} age = {26} /> */}
    <MyFourthComponent
      parentComponentName = {"App"}>


      </MyFourthComponent >
         
    
    </div>
  );
}

export default App;