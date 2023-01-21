import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const UserInfo = () => {
    let navigate = useNavigate();
    const [boards, setBoards] = useState([]);
    useEffect(() => {
        axios.get("/userinfo").then((response) => {
            setBoards(response.data);
            console.log(response.data);
        })
        .catch(err => {
            var errMsg = err.message;
            if(errMsg.includes("401"))
            navigate("/login");
        })
      
    }, []);

   

    return (
        <div>
            <Link to="/info">infoPage</Link> <br></br>
            <p>토큰 값 : {localStorage.getItem('token')}</p>
                            {/* {boards.username} </td>
                              <td> {boards.userEmail} </td>
                              <td> {boards.nickname} </td>
                              <td> {boards.authorityDtoSet} </td>
                   
             */}

</div>
    );
}

export default UserInfo;