import './App.css'
import { Header } from './components/Header/Header'
// import FooterComponent from './components/Footer/Footer'
import { default as FooterComponent } from './components/Footer/Footer'
import { Books } from './components/Books/Books';
import { Input } from './components/Input/Input';

export type Book = {
  id: number;
  name: string;
  author: string;
  publicationDate: string;
}

function App() {
  const items: Book[] = [
    {
      id: 1,
      name: "Książka 1",
      author: "Autor 1",
      publicationDate: "2020-01-01",
    },
    {
      id: 2,
      name: "Książka 2",
      author: "Autor 2",
      publicationDate: "2021-01-01",
    },
    {
      id: 3,
      name: "Książka 3",
      author: "Autor 3",
      publicationDate: "2022-01-01",
    },
  ];
  const appTitle = "Witaj w naszej księgarni"

  return (
    <div>
      <Header appTitle={appTitle} />
      <Input />
      <Books items={items} />
      <FooterComponent />
    </div>
  )
}

export default App
