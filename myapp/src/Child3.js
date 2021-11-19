function Child3(props){
    const { childComponentName } =props;
    return (
    <div>
    <h3> In ThirdChild called from 
         { childComponentName }
          </h3>
        </div>
    );

}
export default Child3;

/* export default () =>{
    return (
        <>
            <h2> I am inside Thirt Child.</h2>
        </>
    );
} */