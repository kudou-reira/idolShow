import {EMAIL_CHANGE} from '../actions/types';
import {PASSWORD_CHANGE} from '../actions/types';
import {LOGIN_USER_SUCCESS} from '../actions/types';
import {LOGIN_USER_FAIL} from '../actions/types';
import {LOGIN_USER_LOAD} from '../actions/types';

const INITIAL_STATE = {
    
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false

};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type){
        
        case EMAIL_CHANGE:
            return {...state, email: action.payload};
        
        case PASSWORD_CHANGE:
            return {...state, password: action.payload};
        
        case LOGIN_USER_LOAD:
            return {...state, loading: true, error: ''}
            
        case LOGIN_USER_SUCCESS:
            return {
                        ...state, 
                        user: '', 
                        loading: false,
                        email: '',
                        password: '',
                        user: action.payload
                   }
        
        case LOGIN_USER_FAIL:
            return {... state, error: 'Authentication Failed.', password: '', loading: false}
        
        default:
            return state;
                      
    }
    
    
};