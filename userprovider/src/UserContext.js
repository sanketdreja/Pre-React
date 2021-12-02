import React from "react";



//create a new  User contexrt
const userContext = React.createContext();
//userProvider
 const UserProvider = userContext.Provider;
 //userconsumer
const UserConsumer = userContext.Consumer;
//export object                                 
export { UserProvider, UserConsumer};
