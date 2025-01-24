import './userInfo.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {exit} from '../../features/registerUser/registerUser.js';
import { useNavigate } from 'react-router-dom';


function userInfo() {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.registerUser.currentUser);
    const navigate = useNavigate();


    if (!currentUser) {
        return (
            <div className='user-info-wrapper'>
                <a href='/login' className='btn login-btn'>Login</a>
            </div>
        );
    }

    function handleClick(){
        dispatch(exit());
        navigate('/login');
    }
    return (
        <>

            <div className='user-info-wrapper'>
                <div className='user-info'>
                    <p className='user-name'>
                        {currentUser.name}
                    </p>
                    <p className='user-email'>
                        {currentUser.email}
                    </p>
                </div>
                <button className='btn' onClick={handleClick}>EXIT</button>
            </div>

        </>
    )

}

export default userInfo;