import { useState } from 'react';

export default (WrappedComponent) => {
  //return  TestComponent;
  return () => {
    const [value, setvalue] = useState(0);
    const onclickHandler = () => {
      setvalue(value + 1);
    };

    return <WrappedComponent value={value} onclickHandler={onclickHandler} />;
  };
};

// const TestCpmponent = () => {
//   //return <h2>Im in Test component </h2>
// };
