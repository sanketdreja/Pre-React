export default (userId) => {
  let status = 'online';
  //code to fetch the user status from server from server(API call)

  //write a code to return status as online if user is even else return offline

  //   if (userId % 2 == 0) {
  //     status = 'online';
  //   } else {
  //     status = 'offline';
  //   }
  //   return status;

  return userId % 2 ? 'offline ' : 'online'; //same as above
};
