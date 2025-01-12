//子組件
function Hello() {
  return (
    <h3>Hello React</h3>
  )
}
//子組件
const Hello2 = () => {
  return (
    <h3>Hello 2 React2</h3>
  )
}

//父組件
function App() {

  return (
    <>
      <h1>Hello React</h1>
      <h2>micro-service</h2>
      <Hello />
      <Hello2 />
    </>
  )
}

export default App
