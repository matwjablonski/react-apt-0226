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
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Modal } from './components/Modal/Modal';
import { UserProvider, type User } from './context/UserContext';
import { ThemeProvider, type Theme } from './context/ThemeContext';

export type Book = {
  id: number;
  name: string;
  author: string;
  publicationDate: string;
}

function App() {
  const appTitle = "Witaj w naszej księgarni"
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<Theme['theme']>('light');

  const handleOpenLoginModal = () => {
    setIsModalVisible(prev => !prev);
  }

  const handleLogin = (canLogin: boolean) => {
    setUser(canLogin ? { isLoggedIn: true, name: "Mateusz" } : null);
    setIsModalVisible(false);
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <ThemeProvider value={{
      theme,
      changeTheme: (newTheme: "light" | "dark") => setTheme(newTheme)
    }}>
      <UserProvider value={user}>
        <div className="mt-4">
          <Header appTitle={appTitle}>
            {user?.isLoggedIn && <div>
              <MyAvatar alt="Twój awatar" src="https://placehold.co/150" />
              <p>Witaj, {user.name}!</p>  
            </div>}
            {user?.isLoggedIn && <button onClick={handleLogout}>Wyloguj</button>}
          </Header>
          <button onClick={handleOpenLoginModal}>Otwórz modal logowania</button>
          <Modal isVisible={isModalVisible}>
            {!user?.isLoggedIn && <LoginForm loginAction={handleLogin} />}
          </Modal>
          <h3>Form 2</h3>
          <LoginFormRef />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/books'
              element={
                <ProtectedRoute>

                  <Suspense fallback={<p>Ładowanie...</p>}>
                    <BooksPage />
                  </Suspense>
                </ProtectedRoute>
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
                  <ContactPage />
                </Suspense>
              }
            />
          </Routes>
          <FooterComponent />
        </div>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
