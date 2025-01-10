import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ArtistsPage from './components/ArtistsPage/ArtistsPage';
import InfoPage from './components/InfoPage/InfoPage';
import FormPage from './components/FormPage/FormPage';
import HomePage from './components/HomePage/HomePage';
import Artist from './components/Artist/Artist';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Nemanja from './components/Artist/Nemanja';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
              errorElement={<ErrorPage />}
            />
          </Routes>
          <Routes>
            <Route
              path='/artists'
              element={<ArtistsPage />}
            />
          </Routes>
          <Routes>
            <Route
              path='/artists/:artistId'
              element={<Nemanja />}
            />
          </Routes>
          <Routes>
            <Route
              path='/info'
              element={<InfoPage />}
            />
          </Routes>
          <Routes>
            <Route
              path='/form'
              element={<FormPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
