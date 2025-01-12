// 陣列 map, filter 的使用
function App() {
  // 陣列
  const listItems = [
    {id:1, name:'Apple', price:20},
    {id:2, name:'Banana', price:30},
    {id:3, name:'Orange', price:40},
  ];
  // 陣列過濾
  const filterItems = listItems.filter((item) => {
    return item.price > 25;
  })
  
  return (
    <>
      {
        listItems.map((item, index) => {
          return (
            <div key={item.id}>
              index = {index},
              id = {item.id},
              name = {item.name},
              price = {item.price}
            </div>
          )
        })
      }
      <hr />
      {
        filterItems.map((item, index) => {
          return (
            <div key={item.id}>
              index = {index},
              id = {item.id},
              name = {item.name},
              price = {item.price}
            </div>
          )
        })
      }
    </>
  )
}
export default App