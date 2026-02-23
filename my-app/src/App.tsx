import './App.css'
import { Header } from './components/Header/Header'
// import FooterComponent from './components/Footer/Footer'
import { default as FooterComponent } from './components/Footer/Footer'
import { LoginForm } from './components/LoginForm/LoginForm';
import { LoginFormRef } from './components/LoginFormRef/LoginFormRef';
import { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router';
import { ContactPage } from './pages/Contact';
import { ReadersPage } from './pages/Readers';
import { BooksPage } from './pages/Books';
import { Home } from './pages/Home';
import { BookPage } from './pages/Book';
import { MyAvatar } from './components/Avatar/Avatar';

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
    <div className="mt-4">
      <Header appTitle={appTitle}>
        {isUserLoggedIn && <div>
          <MyAvatar alt="Twój awatar" src="https:/ /placehold.co/150" />
          <p>Witaj, Mateusz!</p>  
        </div>}
        {isUserLoggedIn && <button onClick={handleLogout}>Wyloguj</button>}
      </Header>
      {!isUserLoggedIn && <LoginForm loginAction={handleLogin} />}
      <h3>Form 2</h3>
      <LoginFormRef />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/books'
          element={
            <Suspense fallback={<p>Ładowanie...</p>}>
              <BooksPage />
            </Suspense>
          }
        />
        <Route path="/books/:id" element={<BookPage />} />
        <Route
          path='/readers'
          element={
            <Suspense fallback={<p>Ładowanie...</p>}>
              <ReadersPage />
              
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback={<p>Ładowanie...</p>}>
              <ContactPage isUserLoggedIn={isUserLoggedIn} />
            </Suspense>
          }
        />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
