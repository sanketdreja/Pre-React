import FirstChild from "./FirstChild"
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

 export default (props)=>{
    
        
    
    const {name,age}=props;
    console.log(name);
    console.log(age);
    return (
        <>
        <h2>
        Hello I am {name},I am {age} yrs old Im inside MySecondComponent2

            
        </h2>

        {/* <FirstChild/>
        <SecondChild/>
        <ThirdChild/> */}
        </>
    );
};
