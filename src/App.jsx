import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArtistsPage from "./components/ArtistsPage/ArtistsPage";
import InfoPage from "./components/InfoPage/InfoPage";
import FormPage from "./components/FormPage/FormPage";
import HomePage from "./components/HomePage/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Nemanja from "./components/Artist/Nemanja/Nemanja";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Dunjaluk from "./components/Artist/Dunjaluk/Dunjaluk";
import Maali from "./components/Artist/Maali/Maali";
import Eine from "./components/Artist/Eine/Eine";
import "./App.css";
import Aracataca from "./components/Artist/Aracataca/Aracataca";
import Otok from "./components/Artist/Otok/Otok";
import Seine from "./components/Artist/Seine/Seine";
import Dzipsii from "./components/Artist/Dzipsii/Dzipsii";
import Lovski from "./components/Artist/Lovski/Lovski";

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
                <Route path="/" element={<HomePage />} />
                <Route path="/artists" element={<ArtistsPage />} />
                <Route path="/artists/nemanja" element={<Nemanja />} />
                <Route path="/artists/dunjaluk" element={<Dunjaluk />} />
                <Route path="/artists/aracataca" element={<Aracataca />} />
                <Route path="/artists/seine" element={<Seine />} />
                <Route path="/artists/dzipsii" element={<Dzipsii />} />
                <Route path="/artists/maali" element={<Maali />} />
                <Route path="/artists/eine" element={<Eine />} />
                <Route path="/artists/otok" element={<Otok />} />
                <Route path="/artists/lovski" element={<Lovski />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
