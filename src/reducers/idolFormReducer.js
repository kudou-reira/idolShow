import {IDOL_UPDATE, IDOL_CREATE, IDOL_SAVE_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    
    name: '',
    phone: '',
    shift: '',
    image: '',
    day: '',
    rate: 0,
    event: ''
    
};

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type){
        case IDOL_UPDATE:
            // action.payload === {prop: 'name', value: 'jane'}, key interpolation!
            //value is not created until called
            return {...state, [action.payload.prop]: action.payload.value};
        case IDOL_CREATE:
            return INITIAL_STATE;
        case IDOL_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
    
    
}