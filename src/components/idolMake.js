import React from 'react';
import {connect} from 'react-redux';
import {idolChange, idolCreate} from '../actions';
import {Card, CardSingle, ClickButton} from './common';
import IdolForm from './idolForm';
import {ScrollView} from 'react-native';

class IdolMake extends React.Component{
    
    onButtonPress(){
        
        const {name, phone, shift, image, day, rate, event} = this.props;
        //set picker value
        this.props.idolCreate({name, phone, shift, image, day, rate, event});
    }
    
    render(){
        
        //pass props to idolForm in order to initialize
        return(
            <Card>
                <ScrollView>
                    <IdolForm {...this.props} />
                    <CardSingle>
                        <ClickButton onPress = {this.onButtonPress.bind(this)}>
                            Create
                        </ClickButton>
                    </CardSingle>
                </ScrollView>
            </Card>
        );
    }   
}


const mapStateToProps = (state) => {
    
    const {name, phone, shift, image, day, rate, event} = state.idolForm;
    return {name, phone, shift, image, day, rate, event};
    
};

export default connect(mapStateToProps, {idolChange, idolCreate})(IdolMake);