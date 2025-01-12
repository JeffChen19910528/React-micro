// React 條件的判斷
import './App.css';
let isPass = true;

const Confirm1 = () => {
  let isLogin = false;
  if(isLogin){
    return <h1>歡迎</h1>
    }
    else
    {
      return <h1>請登入</h1>
    }
}

const Confirm2 = () => {
  let isLogin = true;
  return isLogin ? <h1>歡迎</h1> : <h1>請登入</h1>
}

function App() {
  return (
    <>
      <Confirm1 />
      <Confirm2 />
      <div className={isPass ? 'pass' : 'fail'}>
        {isPass && <div>您好</div>}
        {!isPass && <div>請登入</div>}
      </div>
      <div className={`normal ${isPass ? 'pass' : 'fail'}`}>
        {isPass && <div>您好</div>}
        {!isPass && <div>請登入</div>}
      </div>
    </>
    
  )
}
export default App