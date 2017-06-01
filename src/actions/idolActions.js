import {IDOL_UPDATE, IDOL_CREATE, IDOL_FETCH_SUCCESS, IDOL_SAVE_SUCCESS} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const idolChange = ({prop, value}) => {
    
  return{
      type: IDOL_UPDATE,
      payload: {prop, value}  
  };
    
};

export const idolCreate = ({name, phone, shift, image, day, rate, event}) => {

  //console.log(name, phone, shift)
  //currentUser has a UID
  const {currentUser} = firebase.auth();
  
  //call redux thunk, but don't return anything
  //called with 'dispatch' to reset form
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift, image, day, rate, event})
      .then(() => {
        dispatch({type: IDOL_CREATE});
        Actions.idolList({type: 'reset'})
    });
  };
};

export const idolFetch = () => {
  //snapshot, any time this function gets data, return an object that describes this data
  //snapshot.val is THE ACTUAL VALUES
  //on makes it so that "on" is called ANYTIME there is new data!
  const {currentUser} = firebase.auth();
  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
          dispatch({type: IDOL_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const idolSave = ({name, phone, shift, image, day, rate, event, uid}) => {
  const {currentUser} = firebase.auth();
    
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift, image, day, rate, event})
      .then(() => {
        dispatch({type: IDOL_SAVE_SUCCESS});
        Actions.idolList({type: 'reset'});
      });
  };
};

export const idolDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
    
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.idolList({type: 'reset'});
    });
  };
};