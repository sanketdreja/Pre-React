import React, { Component } from 'react';
import { useState } from 'react';
import OnlineOrderChild from './OnlineOrderChild';
// import withOrder from './withOrder';
const OnlineOrder = (props) => {
  console.log(props);
  const status = [
    'order placed',
    'pending',
    'preparing',
    'out of delivery',
    'delicered',
  ];
  const [value, setValue] = useState(0);
  const onClickHandler = () => {
    setValue(value + 1);
  };
  return (
    <>
      <h2>Online Orders</h2>
      <div>Current status:{status[value]}</div>
      <button onClick={onClickHandler}> Next status</button>
      <OnlineOrderChild onClickHandler={onClickHandler} />
    </>
  );
};
export default OnlineOrder;
