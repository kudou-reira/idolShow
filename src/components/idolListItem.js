import React from 'react';
import {Text, TouchableWithoutFeedback, View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSingle} from "./common";


class IdolListItem extends React.Component{
    
    onRowPress() {
        //idol UID is from here
        Actions.idolEdit({idol: this.props.idol});
    }
    
    render() {
        const {name, image, rate} = this.props.idol;
        return (
        
            <TouchableWithoutFeedback onPress = {this.onRowPress.bind(this)}>
                <View>
                    <CardSingle>
                        <Text style = {styles.titleStyle}>
                            {name}
                        </Text>
                        <Image
                            style={styles.profilePicStyle}
                            source={{uri: image}}
                            resizeMode =  {Image.resizeMode.center}
                        />
                        <Text style = {styles.rateStyle}>
                            {rate}/10
                        </Text>
                    </CardSingle>
                </View>
            </TouchableWithoutFeedback>
        );
        
    }
    
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 2
    },
    profilePicStyle: {
        width: 30,
        height: 30,
        flex: 1
    },
    rateStyle: {
        flex: 0.5
    }
}

export default IdolListItem;