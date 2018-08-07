import { read_cookie, bake_cookie } from 'sfcookies';
import * as constants from '../actions/constants';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
    let balance;
    
    switch (action.type) {
        case constants.SET_BALANCE:
             balance = action.balance;
             break;
        case constants.DEPOSIT:
            balance = action.deposit + state;
            break;
        case constants.WITHDRAWAL:
            balance = state - action.withdrawal;
            break;
        default: 
            balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
    }
    bake_cookie(BALANCE_COOKIE, balance);
    
    return balance;
};

export default balance;