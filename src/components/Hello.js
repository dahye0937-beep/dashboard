const Hello = ({user, onLogout}) => {
  return (
    <div>
       <p id="hello-page">{user}님 안녕하세요</p>
       <div className="logout-text">
       <small>"오늘 하루도 수고많으셨습니다."</small>
       <button id="logout-btn" onClick={onLogout}>로그아웃</button>
       </div>
    </div>
  )
}

export default Hello