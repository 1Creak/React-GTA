import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import UserInfo from "./components/userInfo/UserInfo.jsx";

function Navigation() {
    const location = useLocation();
    return (
        <header>
            {location.pathname !== '/home' && <UserInfo />}
            <nav className='navigation'>
                <Link to="/register">Go to Register Page</Link> |
                <Link to="/login">Go to Login Page</Link> |
                <Link to="/home">Go to Home Page</Link>
            </nav>
        </header>
    );
}

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
