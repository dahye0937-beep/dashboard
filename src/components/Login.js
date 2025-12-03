import { useState } from "react"

const Login = ({onLogin}) => {
    const [user,setUser] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault(); //이미 있는 기능 실행 방지
        onLogin(user);
    }
  return (
    <form id="login-page" onSubmit={handleSubmit}>
        <h2>이름을 입력해 주세요, 반갑습니다.</h2>
        <div className="input-button">
        <input
            type="text"
            value={user}
            onChange={(e)=>{setUser(e.target.value)}}
        />
        <button type="submit">접속하기</button>
        </div>
    </form>
  )
}

export default Login