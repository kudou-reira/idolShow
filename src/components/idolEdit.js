import React from 'react';
import _ from 'lodash';
import {Card, CardSingle, ClickButton, ConfirmModal} from './common';
import IdolForm from './idolForm';
import {ScrollView} from 'react-native';
import Communications from 'react-native-communications';
import {idolChange, idolSave, idolDelete} from '../actions';
import {connect} from 'react-redux';

//need to load the reducer information first

class IdolEdit extends React.Component{
    
    state = {showModal: false};
    
    componentWillMount(){
        //iterate over every property of the props reducers
        _.each(this.props.idol, (value, prop) => {
           this.props.idolChange({prop, value}); 
        }); 
    }
    
    onButtonPress(){
        
        const {name, phone, shift, image, day, rate, event} = this.props;
        this.props.idolSave({name, phone, shift, image, day, rate, event, uid: this.props.idol.uid});
        
    }

    onMessagePress(){
        
        const {phone, shift, day, rate} = this.props;
        const testHold = day.dateString;
        
        Communications.text(phone, `Your upcoming schedule is from ${shift} on ${day.dateString}` + ", " + this.getDayOfWeek(testHold) + "." + " By the way, your current idol popularity is " + rate + " stars out of 10 stars.");
    }

    getDayOfWeek(date) {
        
        var weekday = new Date(date).getDay();    
        
        return isNaN(weekday) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][weekday];
    }

    onRemovePress(){
        
        this.setState({showModal: !this.state.showModal})
    }

    onAccept() {
        
        const {uid} = this.props.idol;
        this.props.idolDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false});
    }
    
    
    render() {
        return (
            <Card>
                <ScrollView>
                    <IdolForm />
                    <CardSingle>
                        <ClickButton onPress = {this.onButtonPress.bind(this)} >
                            Save Changes
                        </ClickButton>
                    </CardSingle>

                    <CardSingle>
                        <ClickButton onPress = {this.onMessagePress.bind(this)} >
                            Message Schedule
                        </ClickButton>
                    </CardSingle>

                    <CardSingle>
                        <ClickButton onPress = {this.onRemovePress.bind(this)}>
                            Remove
                        </ClickButton>
                    </CardSingle>

                    <ConfirmModal
                        visible = {this.state.showModal}
                        onAccept = {this.onAccept.bind(this)}
                        onDecline = {this.onDecline.bind(this)}
                    >
                        Are you sure you want to remove this entry?
                    </ConfirmModal>
                </ScrollView>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    
  const {name, phone, shift, image, day, rate, event} = state.idolForm;
    
  return {name, phone, shift, image, day, rate, event};
    
};

export default connect (mapStateToProps, {idolChange, idolSave, idolDelete})(IdolEdit);