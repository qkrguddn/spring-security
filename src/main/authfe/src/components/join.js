import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const Join = () => {

  let navigate = useNavigate();
  const [boards, setBoards] = useState({
    //''안에 초기값 설정
    username: '',
    password: '',
    nickname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoards({
      ...boards,
      [name]: value,
    });
  };
  const createBoard = async (event) => {
    event.preventDefault();
    await axios.post("/join", {
        username: boards.username,
        password: boards.password,
        nickname: boards.nickname
    });

    navigate("/login");
  };
  return (
        <div className="card-body">
        <form>
          <div className="form-group">
            <label> 아이디  </label>
            <input placeholder="아이디" name="username" className="form-control"
              value={boards.username} onChange={handleChange} />
          </div>
        
          <div className="form-group">
            <label> 비밀번호  </label>
            <textarea placeholder="password" name="password" className="form-control"
              value={boards.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label> 닉네임  </label>
            <textarea placeholder="nickname" name="nickname" className="form-control"
              value={boards.nickname} onChange={handleChange} />
          </div>
          <button className="btn btn-success" onClick={createBoard}>Save</button>
        </form>
      </div>
    );
  
}

export default Join;