import './App.css'
import { Header } from './components/Header/Header'

function App() {
  const items = ['item1', 'item2', 'item3']
  const appTitle = "Witaj w naszej księgarni"

  return (
    <div>
      <Header appTitle={appTitle} />
      
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <footer>
        <p>Copyright © 2024 | Created by: Mateusz</p>
      </footer>
    </div>
  )
}

export default App
