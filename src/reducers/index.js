import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import IdolFormReducer from './idolFormReducer';
import IdolReducer from './idolReducer';

export default combineReducers({
    
   auth: AuthReducer,
   idolForm: IdolFormReducer,
   idols: IdolReducer
});