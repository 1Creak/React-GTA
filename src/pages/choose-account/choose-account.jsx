import './choose-account.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const ChooseAccount = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.registerUser.currentUser);
    console.log(currentUser);
    let color = '';

    return (
        <div className='choose-account'>
            <div>
                {currentUser === null ? (
                    <div className='account-error'>
                        <p>You must be <span>logged in</span></p>
                    </div>
                ) : (
                    <div className='account-info-wrapper'>
                        {currentUser.accounts && currentUser.accounts.length > 0 ? (
                            currentUser.accounts.map((account, index) => (
                                <div key={index} className='account-info'>
                                    <div className='choose-account-header'>
                                        <img src='/img/grayman.png' alt="Account Avatar" />
                                    </div>
                                    <div className='choose-account-type'>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        {account.vip ? 'VIP аккаунт' : 'Бесплатный аккаунт'}
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                        <div className={account.vip ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    </div>
                                    <div className='account-info-item'>
                                        <p>Никнейм персонажа</p>
                                        <p>{account.nickname}</p>
                                    </div>
                                    <div className='account-info-item'>
                                        <p>Статус</p>
                                        <p>{account.status ? (
                                            <>
                                                <span>Активен</span> (блокировки нет)
                                            </>
                                        ) : (
                                            <>
                                                <span>Не активен</span> (заблокирован)
                                            </>
                                        )}</p>
                                    </div>
                                    <div className='account-info-item'>
                                        <p>Фракция</p>
                                        <p>{account.fraction}</p>
                                    </div>
                                    <div className='account-info-item'>
                                        <p>Работа</p>
                                        <p>{account.job}</p>
                                    </div>
                                    <div className='account-info-item'>
                                        <p>Общий баланс</p>
                                        <p>{account.money}$</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='account-error'>
                                <p>У вас нет доступных аккаунтов.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChooseAccount;
