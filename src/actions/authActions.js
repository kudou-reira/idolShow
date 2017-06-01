import firebase from 'firebase';
import {EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_LOAD} from './types';
import {Actions} from 'react-native-router-flux';

export const emailChange = (text) => {

    return {
        
        type: EMAIL_CHANGE,
        payload: text
        
    };
}

export const passwordChange = (text) => {
    
    return{
        
        type: PASSWORD_CHANGE,
        payload: text
        
    };
    
}

const loginUserSuccess = (dispatch, user) => {
    
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
        
    });
    
    Actions.main();
};

const loginUserFail = (dispatch) => {
    
    dispatch({
        type: LOGIN_USER_FAIL
    });
}

export const loginUser = ({email, password}) => {
    
    
    return (dispatch) => {
       dispatch({type: LOGIN_USER_LOAD});
       firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
           console.log(error);
           firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    
       });
    };
    
};