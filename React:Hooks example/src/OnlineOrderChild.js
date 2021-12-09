export default (props) => {
  console.log(props);
  return (
    <>
      <h2>In Child</h2>
      <button onClick={props.onClickHandler}>Next Status From click</button>
    </>
  );
};
