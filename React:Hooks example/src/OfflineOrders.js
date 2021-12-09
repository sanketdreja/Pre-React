import { useState } from 'react';
import withOrder from './withOrder';
const OfflineOrders = (props) => {
  console.log(props);
  const status = ['Order Placed', 'preparing', 'serving', 'Bill Payment'];

  //   const [value, setValue] = useState(0);

  //   const onclickHandler = () => {
  //     setValue(value + 1);
  //   };

  return (
    <>
      <h1>Offline Orders</h1>
      <div>Current status:{status[props.value]}</div>
      <button onClick={props.onclickHandler}>Next Status</button>
    </>
  );
};

export default withOrder(OfflineOrders);
