import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MyThirdComponent(props) {
  const { name, age, children } = props;
  const { parentComponentName } =props;

  console.log(props.name);
  console.log(props.age);
    return (<div>
      {/* <h2>I am {name} and
       I am inside MyFirstComponent and 
        I am {age} years old.
      </h2>
      <h3>{children}</h3> */}
      
      <h3>My MyFirstComponent called from { parentComponentName } </h3>
       <Child1   childComponentName = {"MyThirdComponent"} />
      <Child2  childComponentName = {"MyThirdComponent"}/>
      <Child3 childComponentName = {"MyThirdComponent"}/>
      </div>
      );
  }
  export default MyThirdComponent;

  //Props are arguments passed into React components.
  //Props are passed to components via HTML attributes.
  //Props stand for "Properties."