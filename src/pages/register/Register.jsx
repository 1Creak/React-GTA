import './register.css';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewUser} from '../../features/registerUser/registerUser.js';


const Register = () => {
    const dispatch = useDispatch();

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
        dispatch(addNewUser({
            name: formData.firstName,
            lastName: formData.lastName,
            age: formData.age,
            email: formData.email,
        }))

        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            email: '',
        })
    }

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

                </div>

                <div className='register-body-footer'>

                </div>
            </div>

        </>
    );
};

export default Register;
