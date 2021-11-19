function Child2(props){
    const { childComponentName } =props;
    return (
    <div>
    <h3> In SecondChild called from 
         { childComponentName }
          </h3>
        </div>
    );

}
export default Child2;


/* export default () =>{
     return <h2>
         I am inside the Second Child.
     </h2>
} */