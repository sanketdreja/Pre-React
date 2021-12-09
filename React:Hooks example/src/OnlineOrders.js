import React, { Component } from 'react';
import { useState } from 'react';
import withOrder from './withOrder';
const OnlineOrders = (props) => {
  console.log(props);
  const status = [
    'Order placed',
    'Pending',
    'Preparing',
    'out of delivery',
    'Delivered',
  ];

  //   const [value, setValue] = useState(0);
  //   const onclickHandler = () => {
  //     setValue(value + 1);
  //   };
  return (
    <>
      <h1>Online Orders</h1>
      <div>Current status:{status[props.value]}</div>
      <button onClick={props.onclickHandler}>Next status</button>
    </>
  );
};
export default withOrder(OnlineOrders);
