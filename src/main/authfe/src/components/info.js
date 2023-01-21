import axios from "axios";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { tokenInsertHeader } from "../module/tokenInsertHeader";

const Info = () => {
    let navigate = useNavigate();
    
   
    const token = localStorage.getItem('token') //로컬스토리지 데이터 key에 '토큰'이있다면 값이 나와
    if (token) {
      tokenInsertHeader(token)
    }
    const [users, setUsers] = useState([]);

    useEffect(() => {   
        axios({
            method:"GET", url:"/mainpage" }).then((response) => {
            setUsers({
                name: response.data.username,
                nickname: response.data.nickname
            })
        })
        .catch(err => {
            var errMsg = err.message;
            if(errMsg.includes("401"))
            navigate("/login");})
    }, []);
   
    const logout = () => {
        let token = localStorage.getItem('token')
        localStorage.clear()
        navigate("/login");
    }
    return (
        <div>
            <Link to="/adminPage">관리자페이지</Link><br></br>
            <Link to="/userInfo">개인정보</Link><br></br>
          
            아이디:   {users.name}<br></br>
            닉네임:    {users.nickname}
            
            <form>
            <button onClick={logout}>로그아웃</button>
            </form>
        </div>
    );

}

export default Info;