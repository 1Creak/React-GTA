import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,useLocation, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import {Link} from 'react-router-dom';
import UserInfo from "./components/userInfo/UserInfo.jsx";

function App() {
    const location = useLocation();
    return (
        <>

            <Router>
                <header>
                    {/*{location.pathname !== '/home' && <UserInfo />}*/}
                    <nav className='navigation'>
                        <Link to="/register">Go to Register Page</Link> |
                        <Link to="/login">Go to Login Page</Link> |
                        <Link to="/home">Go to Home Page</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<About/>}/>
                </Routes>
            </Router>

        </>
    )
        ;
}

export default App;
