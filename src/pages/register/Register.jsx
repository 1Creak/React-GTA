import './register.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNewUser} from '../../features/registerUser/registerUser.js';


const Register = () => {
    const value = useSelector((state) => state.registerUser.users);
    const dispatch = useDispatch();


    return (
        <>
            <div className='register-wrapper'>
                <div className='register-header'>
                    <img src='/img/grayman.png'/>
                </div>
                <div className='register-body'>
                    <h2>
                        РЕГИСТРАЦИЯ
                    </h2>
                    <div className='register-body-fields'>
                        <input type='text' placeholder='First name'/>
                        <input type='text' placeholder='Last name'/>
                        <input type='text' placeholder='Age'/>
                        <input type='email' placeholder='Email'/>
                        <input type='text' placeholder='Промокод'/>
                    </div>
                    <div className='register-body-submit'>
                        <img width='18' src='/img/left-arrow-svgrepo-com.svg'/>
                        <input type='submit' value='Создать аккаунт' onClick={() => addNewUser()}/>
                    </div>

                </div>

                <div className='register-body-footer'>

                </div>
            </div>

        </>
    );
};

export default Register;
