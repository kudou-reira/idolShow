import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends React.Component{
    
    componentWillMount() {
        
        const config = {
            apiKey: "AIzaSyCR8E8zYB56B9vgu2NHhfqW1hyxZqoiUT0",
            authDomain: "schedule-4a8dc.firebaseapp.com",
            databaseURL: "https://schedule-4a8dc.firebaseio.com",
            projectId: "schedule-4a8dc",
            storageBucket: "schedule-4a8dc.appspot.com",
            messagingSenderId: "451694336458"
        };
        
        firebase.initializeApp(config);
    }
    
    render() {
        
        return (
        
            <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        
        
        );
        
    }
    
    
}

export default App;