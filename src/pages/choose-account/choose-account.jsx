import './choose-account.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const chooseAccount = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.registerUser.currentUser);
    let color = '';
    console.log(JSON.stringify(currentUser, null, 2));

    return (
        <div className='choose-account'>
            <div className=''>
                {currentUser === null ? (
                    <div className='account-error'>
                        <p className=''>You must be <span>logged in</span></p>
                    </div>
                ) : (
                    <div className='account-info-wrapper'>
                        {currentUser.accounts.map((account, index) => (

                            <div key={index} className='account-info'>
                                <div className='choose-account-header'>
                                    <img src='/img/grayman.png'/>
                                </div>
                                <div className='choose-account-type'>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    {account.vip === true ? 'VIP аккаунт' : 'Бесплатный аккаунт'}
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                    <div className={account.vip === true ? color = 'circle-green' : color = 'circle-orange'}></div>
                                </div>
                                <div className='account-info-item'>
                                    <p>Никнейм персонажа</p>
                                    <p>{account.nickname}</p>
                                </div>
                                <div className='account-info-item'>
                                    <p>Статус</p>
                                    <p>{account.status === true ? (
                                        <>
                                            <span>Активен</span> (блокировки нет)
                                        </>
                                    ) : (
                                        <>
                                            <span>Не активен</span> (заблокирован)
                                        </>)}</p>
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
                                    <p>{account.money}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )

}

export default chooseAccount;
