import './App.css'
import { Header } from './components/Header/Header'
// import FooterComponent from './components/Footer/Footer'
import { default as FooterComponent } from './components/Footer/Footer'
import { Books } from './components/Books/Books';
import { LoginForm } from './components/LoginForm/LoginForm';
import { LoginFormRef } from './components/LoginFormRef/LoginFormRef';
import { useState } from 'react';

export type Book = {
  id: number;
  name: string;
  author: string;
  publicationDate: string;
}

function App() {
  const appTitle = "Witaj w naszej księgarni"
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = (canLogin: boolean) => {
    setIsUserLoggedIn(canLogin);
  }

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  }

  return (
    <div>
      <Header appTitle={appTitle}>
        {isUserLoggedIn && <p>Witaj, Mateusz!</p>}
        {isUserLoggedIn && <button onClick={handleLogout}>Wyloguj</button>}
      </Header>
      {!isUserLoggedIn && <LoginForm loginAction={handleLogin} />}
      <h3>Form 2</h3>
      <LoginFormRef />
      <Books />
      <FooterComponent isUserLoggedIn={isUserLoggedIn} />
    </div>
  )
}

export default App
