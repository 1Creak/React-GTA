import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/register/Register.jsx';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <nav className='navigation'>
                    <Link to="/about">Go to Register Page</Link> |
                    <Link to="/home">Go to Home Page</Link>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
