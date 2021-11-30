import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import NavBarComponent from './NavBarComponent';
import FooterComponent from './FooterComponent';
import { Route, Routes } from 'react-router';
import ToDoComponent from './ToDoComponent';
import PostComponent from './PostComponent';
import ToDoComponent2 from './ToDoComponent2';
import UserComponent from './UserComponent';


function App() {
  return (
    <>
    <div className="container-fluid">
     <HeaderComponent/>
     
      <NavBarComponent/>
      <Routes>
        <Route path="/todo" element={<ToDoComponent2/>}></Route>
        <Route path="/posts" element={<PostComponent/>}></Route>
        <Route path="/users" element={<UserComponent/>}></Route>

      </Routes>
      <FooterComponent/>
      </div>
      </>
  );
}

export default App;
