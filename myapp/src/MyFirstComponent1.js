import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MyFirstComponent1 (props) {
    const {name,age,children}=props;
    console.log(name);
    console.log(age);
    return (
        <>
        <h2>
        Hello I am {name},I am {age} 
        yrs old Im inside MyFirstComponent2
        </h2>
        {children}
{/* 
        <FirstChild/>
        <SecondChild/>
        <ThirdChild/> */}
        </>
    );
};
export default MyFirstComponent1;