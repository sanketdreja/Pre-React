import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent';
import NavBarComponent from './NavBarComponent';
import FooterComponent from './FooterComponent';
import { Route, Routes } from 'react-router';
import ToDoComponent from './ToDoComponent';
import PostComponent from './PostComponent';


function App() {
  return (
    <>
    <div className="container-fluid">
     <HeaderComponent/>
     
      <NavBarComponent/>
      <Routes>
        <Route path="/todo" element={<ToDoComponent/>}></Route>
        <Route path="/posts" element={<PostComponent/>}></Route>
      </Routes>
      <FooterComponent/>
      </div>
      </>
  );
}

export default App;
