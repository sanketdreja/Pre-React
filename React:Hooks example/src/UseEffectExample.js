import React, { Component, useEffect, useState } from 'react';
import useMyLog from './useMyLog';
import useUserStatus from './useUserStatus';

export default () => {
  const [value, setValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const onclickHandler = () => {
    setValue(value + 1);
  };
  const onNewValueClickHandler = () => {
    setNewValue(newValue + 1);
  };
  const userStatus = useUserStatus(value);
  //useEffect(()=>{
  // console.log("rendered");
  //}\

  //   useEffect(() => {
  //     console.log('rendered..');
  //   }, []); //execute only once after component is rendered

  //   useEffect(() => {
  //     console.log('valuae updated');

  //     return () => {
  //       console.log('clean up');

  //     };

  //   }, [value]); //execute ecerytime when value will get updated

  useMyLog(value);
  return (
    <>
      <h2>Use Effect Example Component</h2>
      <div> Value:{value}</div>
      <div>useUserStatus:{userStatus}</div>
      <div>New Value:{newValue}</div>

      <button onClick={onclickHandler}> click me </button>
      <button onClick={onNewValueClickHandler}>
        click me update new value
      </button>
    </>
  );
};
