
import { Link } from "react-router-dom";

const Main = () => {
  
    return (
        <div>
            <Link to="/login">로그인</Link><br></br>
            <Link to="/join">회원가입</Link>
        </div>
    );

}

export default Main;