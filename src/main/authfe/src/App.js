import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Login from './components/login';
import Join from './components/join';
import Info from './components/info';
import AdminPage from './components/adminPage';
import UserInfo from './components/userInfo';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/join" element={<Join/>}></Route>
          <Route path="/info" element={<Info/>}></Route>
          <Route path="/adminPage" element={<AdminPage/>}></Route>
          <Route path="/userInfo" element={<UserInfo/>}></Route>

         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;