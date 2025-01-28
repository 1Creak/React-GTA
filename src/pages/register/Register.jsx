import './register.css';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNewUser, clearError, emptyField} from '../../features/registerUser/registerUser.js';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.registerUser.error);
    const currentUser = useSelector(state => state.registerUser.currentUser);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting && error === null) {
            navigate('/choose-account');
        }
        if (error) {
            setIsSubmitting(false);
        }
    }, [error, isSubmitting]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.age || !formData.email) {
            dispatch(emptyField());
            return;
        }

        dispatch(addNewUser({
            name: formData.firstName,
            lastName: formData.lastName,
            age: formData.age,
            email: formData.email,
        }))

        setIsSubmitting(true);
    }

    return (
        <div className='register-component'>
            <div className='register-wrapper '>
                <div className='choose-account-header'>
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

                        <h2>РЕГИСТРАЦИЯ</h2>

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
                            <input onChange={handleChange} value={formData.lastName} type='text' name='lastName'
                                   placeholder='Last name'/>
                            <input onChange={handleChange} value={formData.age} type='number' name='age'
                                   placeholder='Age'/>
                            <input onChange={handleChange} value={formData.email} type='email' name='email'
                                   placeholder='Email'/>
                        </div>
                        <div className='register-body-submit'>
                            <img width='18' src='/img/left-arrow-svgrepo-com.svg'/>
                            <input type='submit' value='Создать аккаунт'/>
                        </div>
                    </form>

                    <div>
                        <a href='/login'>У меня уже есть аккаунт</a>
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
