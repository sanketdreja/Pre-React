import logo from './logo.svg';
import './App.css';
import { UserProvider } from './UserContext';
import ContextUser_A_Child from './ContextUser_A_Child';

function App() {
  const name="lakhan";
  const id=101;
  const password=77777;
  return (
    <>
    <h1>Heyy Hii Lakhan in App</h1>
    <UserProvider  value={{name:"lakhan" , id:101 , password:77777}}>
    <ContextUser_A_Child />

  </UserProvider>
  </>
  );
}

export default App;
