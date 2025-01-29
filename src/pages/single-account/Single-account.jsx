import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import './signel-account.css';
import { Box, Slider, useMediaQuery } from '@mui/material';

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
        <Box sx={styles.singleAccount}>
            <Box sx={styles.accountInfo}>
                <h1>Account Details</h1>
                <p>Nickname: {account.nickname}</p>
                <p>Fraction: {account.fraction}</p>
                <p>Job: {account.job}</p>
                <p>VIP: {account.vip ? 'Yes' : 'No'}</p>
                <p>Status: {account.status ? 'Active' : 'Inactive'}</p>
                <p>Money: {account.money}</p>
            </Box>

            <Box sx={styles.sliderWrapper}>
                <div>
                    <h2>Mother</h2>

                </div>

                <div>
                    <h2>Father</h2>

                </div>
                <div>
                    <div>
                        <p>Similarity</p>
                        <Slider sx={styles.chooseParent} defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} max={10}/>
                    </div>
                    <div>
                        <p>Skin tone</p>
                        <Slider sx={styles.chooseParent} defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} max={10}/>
                    </div>
                </div>



            </Box>
        </Box>
    );
};

const styles = {
    singleAccount : {
        marginTop: '50px',
        backgroundColor: '#110D0E',
        padding: '20px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    chooseParent : {
      color: '#FF6F06',
    },
    accountInfo : {
        textAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    sliderWrapper :{
        display: 'flex',
        gap: '100px',
    }
}
export default AccountDetail;
