import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { tokenInsertHeader } from "../module/tokenInsertHeader";
import { findAllInRenderedTree } from "react-dom/test-utils";
const Login = () => {

  let navigate = useNavigate();
  
  const [boards, setBoards] = useState({
    //''안에 초기값 설정
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoards({
      ...boards,
      [name]: value,
    });
  };
  const login = async (event) => {

    event.preventDefault();
    await axios.post("/login", {
        username: boards.username,
        password: boards.password,
    })
    .then(res => {
      console.log(res.data)
      localStorage.clear()
      localStorage.setItem('token', res.data.token)
      tokenInsertHeader(res.data.token)
 
  })
  navigate("/info");
  };
  return (
        <div>
        <form>
          <div>
            <label> 아이디  </label>
            <input placeholder="아이디" name="username" value={boards.username} onChange={handleChange} />
          </div>
        
          <div>
            <label> 비밀번호  </label>
            <textarea placeholder="password" name="password" value={boards.password} onChange={handleChange} />
          </div>  
          <button onClick={login}>Save</button>
        </form>
      </div>
    );
  
}

export default Login;