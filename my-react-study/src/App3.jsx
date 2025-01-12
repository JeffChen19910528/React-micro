//css引入
import './App.css'
function App() {
  const text = 'Hello React'
  return (
    <>
      <h1 style={{ backgroundColor: 'red' }}>{text}</h1>
      <h1>{text}</h1>
      <h1>{text} {text}</h1>
      <h1>{text} {text}</h1>
      <h1>{text} {text} {text}</h1>
      <h1>{text.toUpperCase()}</h1>
      <div>
        <input type="text" value={text} />
      </div>
    </>
  )
}

export default App
