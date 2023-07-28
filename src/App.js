import "./App.css";
import MovieList from "./Components/MovieList";
import Connexion from "./pages/Connexion";
import About from "./pages/About";
import { Routes, Route, NavLink } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar text-bg-dark navbar-dark ">
          <div className="container">
            <div className="navbar-brand">
              <h3>SENfILMS</h3>
            </div>
            <ul className="nav">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/connexion" className="nav-link">
                Connextion
              </NavLink>
            </ul>
            {/* ajout ton filtre à cette leme */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Rechercher par nom"
                className="px-3 py-2 rounded-5"
              />
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<MovieList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
      </Routes>
    </div>
  );
};
export default App;
