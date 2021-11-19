import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MyFourthComponent(props) {
  const { name, age } = props;
  const { parentComponentName } =props;
  console.log(props.name);
  console.log(props.age);
    return (
    <>
    {/* <h2>I am {name} and
       I am inside MySecondComponent and 
        I am {age} years old.</h2> */}
     {/*  <FirstChild/>
      <SecondChild/>
      <ThirdChild/> */}

    <h3>My MySecondComponent called from { parentComponentName } </h3>
       <Child1   childComponentName = {"MyFourthComponent"} />
      <Child2  childComponentName = {"MyFourthComponent"}/>
      <Child3 childComponentName = {"MyFourthComponent"}/>     
   </>





    );
  }
  export default MyFourthComponent;
  /**Validating Props
App.propTypes is used for props 
validation in react component. 
When some of the props are passed with 
an invalid type, you will get the warnings
 on JavaScript console. After specifying the 
 validation patterns, you will set the App.
 defaultProps.
 */