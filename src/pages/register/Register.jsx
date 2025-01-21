import './register.css';
import React from 'react';

const Register = () => {
    return (
        <>
            <div className='register-wrapper'>
                <div className='register-header'>
                    <img src='/img/grayman.png' />
                </div>
                <div className='register-body'>
                    <h2>
                        РЕГИСТРАЦИЯ
                    </h2>
                    <div className='register-body-fields'>
                        <input type='text' placeholder='receline'/>
                        <input type='text' placeholder='figpdfpgopdogdp12'/>
                        <input type='text' placeholder='figpdfpgopdogdp12'/>
                        <input type='email' placeholder='Введите адрес электронной почты'/>
                        <input type='text' placeholder='Промокод'/>
                    </div>
                    <div className='register-body-submit'>
                        <img width='18' src='/img/left-arrow-svgrepo-com.svg'/>
                        <input type='submit' value='Создать аккаунт'/>
                    </div>

                </div>

                <div className='register-body-footer'>

                </div>
            </div>

        </>
    );
};

export default Register;
