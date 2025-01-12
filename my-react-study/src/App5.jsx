function App() {
  //陣列
  const listItems = ['Apple', 'Banana', 'Orange']

  //陣列,利用jsx來渲染陣列
  const listItems2 = [
    <li key="1">Apple</li>,
    <li key="2">Banana</li>,
    <li key="3">Orange</li>,
  ]


  return (
    <>
      {listItems}
      {listItems2}
    </>
  )
}

export default App
