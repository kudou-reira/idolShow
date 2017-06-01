import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = (props) => {

    return(
        <View style = {styles.loaderStyle}>
            <ActivityIndicator size = {(props.size || 'large')} />
        </View>
    );
};

const styles = {
    
    loaderStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export {Loader};