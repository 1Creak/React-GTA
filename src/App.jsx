import React from 'react';
import './App.css';
import Counter from "./components/Counter.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/Register.jsx';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <nav>
                    <Link to="/about">Go to Register Page</Link> |
                    <Link to="/home">Go to Home Page</Link>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>

            <Counter />
        </>
    );
}

export default App;
