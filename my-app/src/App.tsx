import './App.css'

function App() {
  const items = ['item1', 'item2', 'item3']

  return (
    <div>
      <h1>TITLE</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
