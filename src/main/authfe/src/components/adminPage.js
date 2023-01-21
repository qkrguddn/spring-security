import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();
  
    useEffect(() => {
        axios({
            method:"GET", url:"/adminpage" }).then((response) => {
                setUsers(response.data);
            })
            .catch(err => {
                var errMsg = err.message;
                console.log("errMsg: "+ errMsg);
                if(errMsg.includes("403")){
                    navigate("/info"); 
                alert("권한이 없습니다.");

            }  
                else  if(errMsg.includes("401")){
                    navigate("/login");
                }
            })
                
    }, []);
   
    return (
        <div>
            <Link to="/info">infoPage</Link> <br></br>
            <table>
            <thead>
                        <tr>
                            <th>아이디</th>
                            <th>닉네임 </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                user =>
                                    <tr key={user.userId}>                               
                                    <td> {user.username} </td>             
                                     <td> {user.nickname} </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                               
                                    
                           
                        
        </div>
    );

}

export default AdminPage;