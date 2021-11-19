function Child1(props){
    const { childComponentName } =props;
    return (
    <div>
    <h3> In FirstChild called from 
         { childComponentName }
          </h3>
        </div>
    );

}
export default Child1;



/* export default ()=>{
    return <h2> 
        I am inside First Child

        <h3>My MyFirstComponent called from 
            { parentComponentName } 
        </h3>
    </h2>;

}; */
