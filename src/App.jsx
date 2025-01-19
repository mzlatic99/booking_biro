import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ArtistsPage from './components/ArtistsPage/ArtistsPage';
import InfoPage from './components/InfoPage/InfoPage';
import FormPage from './components/FormPage/FormPage';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Nemanja from './components/Artist/Nemanja/Nemanja';
import LoadingPage from './components/LoadingPage/LoadingPage';
import Dunjaluk from './components/Artist/Dunjaluk/Dunjaluk';
import Nemecek from './components/Artist/Nemecek/Nemecek';
import './App.css';
import Chui from './components/Artist/Chui/Chui';
import PsecaPlaza from './components/Artist/PsecaPlaza/PsecaPlaza';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div>
        {isLoading ? (
          <LoadingPage onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <Navbar />
            <div>
              <Routes>
                <Route
                  path='/'
                  element={<HomePage />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/artists'
                  element={<ArtistsPage />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/artists/nemanja'
                  element={<Nemanja />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/artists/dunjaluk'
                  element={<Dunjaluk />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/artists/nemecek'
                  element={<Nemecek />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/artists/chui'
                  element={<Chui />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/artists/psecaplaza'
                  element={<PsecaPlaza />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/info'
                  element={<InfoPage />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='/form'
                  element={<FormPage />}
                  errorElement={<ErrorPage />}
                />
                <Route
                  path='*'
                  element={<ErrorPage />}
                />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
