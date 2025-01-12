//事件處理
function App() {
  
  
  const handleClick1 = function() {
    alert('ok2')
  }

  const handleClick2 = () => {
    alert('ok2')
  }

  const handleClick3 = (e)=> {
      alert('ok3' + e)
      console.log(e)
  }

  return (
    <>
      <button onClick={handleClick1}>
        我是按鈕1
      </button><p/>
      <button onClick={handleClick2}>
        我是按鈕2
      </button><p/>
      <button onClick={handleClick3}>
        我是按鈕3
      </button><p/>
    </>
  )
}

export default App
