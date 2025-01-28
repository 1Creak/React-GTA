import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import UserInfo from "./components/userInfo/UserInfo.jsx";
import ChooseAccount from "./pages/choose-account/choose-account.jsx";
import { getPosts } from "./api/request.js";

function Navigation() {

    const location = useLocation();

    useEffect(() =>{
        // getPosts.then(res=>console.log(res)).catch(err => console.log(err));
    },[])
    return (
        <header>
            {(location.pathname !=='/' && location.pathname !== '/login') ? <UserInfo /> : null}
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
                <Route path="/choose-account" element={<ChooseAccount />} />
            </Routes>
        </Router>
    );
}

export default App;
