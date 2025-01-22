import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <header>
                <Router>
                    <nav className='navigation'>
                        <Link to="/register">Go to Register Page</Link> |
                        <Link to="/login">Go to Login Page</Link> |
                        <Link to="/home">Go to Home Page</Link>
                    </nav>

                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<About />} />
                    </Routes>
                </Router>
            </header>

        </>
    );
}

export default App;
