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
import TannuTuwa from './components/Artist/TannuTuwa/TannuTuwa';
import Maali from './components/Artist/Maali/Maali';
import Eine from './components/Artist/Eine/Eine';
import './App.css';
import Funkshui from './components/Artist/Funkshui/Funkshui';
import Aracataca from './components/Artist/Aracataca/Aracataca';

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
                />
                <Route
                  path='/artists'
                  element={<ArtistsPage />}
                />
                <Route
                  path='/artists/nemanja'
                  element={<Nemanja />}
                />
                <Route
                  path='/artists/dunjaluk'
                  element={<Dunjaluk />}
                />
                <Route
                  path='/artists/funkshui'
                  element={<Funkshui />}
                />
                <Route
                  path='/artists/aracataca'
                  element={<Aracataca />}
                />
                <Route
                  path='/artists/tannutuwa'
                  element={<TannuTuwa />}
                />
                <Route
                  path='/artists/maali'
                  element={<Maali />}
                />
                <Route
                  path='/artists/eine'
                  element={<Eine />}
                />
                <Route
                  path='/info'
                  element={<InfoPage />}
                />
                <Route
                  path='/form'
                  element={<FormPage />}
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
