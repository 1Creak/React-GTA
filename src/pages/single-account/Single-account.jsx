import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './signel-account.css';

const AccountDetail = ({ users }) => {
    const currentUser = useSelector(state => state.registerUser.currentUser);

    const { nickname } = useParams();

    let account = users
        .flatMap(user => user.accounts)
        .find(account => account.nickname === nickname);

    if (!account) {
        return <p>Аккаунт не найден</p>;
    }

    return (
        <div className='single-account'>
            <div className='account-info'>
                <h1>Account Details</h1>
                <p>Nickname: {account.nickname}</p>
                <p>Fraction: {account.fraction}</p>
                <p>Job: {account.job}</p>
                <p>VIP: {account.vip ? 'Yes' : 'No'}</p>
                <p>Status: {account.status ? 'Active' : 'Inactive'}</p>
                <p>Money: {account.money}</p>
            </div>

            <div className='slider-wrapper'>
                <div>
                    <h2>Mother</h2>
                </div>

                <div>
                    <h2>Father</h2>
                </div>
            </div>

        </div>
    );
};

export default AccountDetail;
