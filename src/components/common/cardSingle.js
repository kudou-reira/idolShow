import React from 'react';
import {View} from 'react-native';

const CardSingle = (props) => {
    
    return (
        //props.style overrides styles.containerStyle, right overrides left
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
    
};

const styles = {
    
    containerStyle: {
        
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: "#ffffff",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#dddddd",
        position: "relative"
        
    }
    
    
};

export {CardSingle};