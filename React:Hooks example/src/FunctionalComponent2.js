import { useState } from 'react';

export default () => {
  //const stateArr=useState(0);
  //const [value,setState]=stateArr;
  const [value, setValue] = useState(0); //same as above
  const onclickHandler = () => {
    setValue(value + 1);
  };

  const onclickHandler2 = () => {
    setValue(value - 1);
  };

  return (
    <>
      <h2>Value:{value}</h2>
      <button onClick={onclickHandler2}>Decrement</button>
      <button onClick={onclickHandler}>Increment</button>
    </>
  );
};
