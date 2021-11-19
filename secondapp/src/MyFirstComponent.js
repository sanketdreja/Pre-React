import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MyFirstComponent(props) {
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
       <FirstChild   childComponentName = {"MyFirstComponent"} />
      <SecondChild  childComponentName = {"MyFirstComponent"}/>
      <ThirdChild childComponentName = {"MyFirstComponent"}/>
      </div>
      );
  }
  export default MyFirstComponent;

  //Props are arguments passed into React components.
  //Props are passed to components via HTML attributes.
  //Props stand for "Properties."