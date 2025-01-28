import './Login.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, emptyField, clearError} from '../../features/registerUser/registerUser.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.registerUser.error);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] =  useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
    });
    useEffect(() =>{
        if (isSubmitting && error === null) {
            navigate('/choose-account');
        }
        if (error) {
            setIsSubmitting(false);
        }
    }, [isSubmitting]);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: formData.firstName,
            email: formData.email,
        }));
        setIsSubmitting(true);

        if(!formData.firstName || !formData.email ){
            dispatch(emptyField());
        }

    }

    return (
        <div className='register-component'>
            <div className='register-wrapper'>
                <div className='register-header'>
                    <img src='/img/grayman.png'/>
                </div>
                <div className='register-body'>
                    <div className='register-body-title'>
                        <div className='register-body-circles'>
                            <div className='register-body-circle'></div>
                            <div className='register-body-circle'></div>
                            <div className='register-body-circle'></div>
                            <div className='register-body-circle'></div>
                        </div>

                        <h2>LogIn</h2>

                        <div className='register-body-circles'>
                            <div className='register-body-circle'></div>
                            <div className='register-body-circle'></div>
                            <div className='register-body-circle'></div>
                            <div className='register-body-circle'></div>
                        </div>

                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='register-body-fields'>
                            <input onChange={handleChange} value={formData.firstName} type='text' name='firstName'
                                   placeholder='First name'/>
                            <input onChange={handleChange} value={formData.email} type='email' name='email'
                                   placeholder='Email'/>
                        </div>
                        <div className='register-body-submit'>
                            <img width='18' src='/img/left-arrow-svgrepo-com.svg'/>
                            <input type='submit' value='Войти'/>
                        </div>
                    </form>

                    <div>
                        <a href='/register'>У меня еще нет аккаунта</a>
                    </div>
                </div>
            </div>

            {error && <div className='register-error-block'>
                <div className='register-error-icon-wrapper'>
                    <img src='/img/exclamation.png' className='register-error-icon'/>
                </div>

                <div>
                    <div className='register-error-block-header'>
                        <span>Error</span>
                        <div className='circle bg-white'></div>
                        <p className='time-duration'>10 seconds</p>
                    </div>
                    <div>
                        <p>
                            {error}
                        </p>

                    </div>
                </div>

            </div>}

        </div>
    );
};

export default Register;
