import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSingle} from './cardSingle';
import {ClickButton} from './button';

const ConfirmModal = ({children, visible, onAccept, onDecline}) => {
    
    return (
        <Modal
            visible = {visible}
            transparent
            animationType = "slide"
            onRequestClose = {() => {}}
        >
            <View style = {styles.containerStyle}>
                <CardSingle style = {styles.cardSingleStyle}>
                    <Text style = {styles.textStyle}>
                        {children}
                    </Text>
                </CardSingle>
        
                <CardSingle>
                    <ClickButton onPress = {onAccept}>Yes</ClickButton>
                    <ClickButton onPress = {onDecline}>No</ClickButton>
                </CardSingle>
            </View>
        </Modal>
    );

};

const styles = {
    
  cardSingleStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
    
};

export {ConfirmModal};