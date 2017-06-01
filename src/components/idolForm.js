import React from 'react';
import {View, Text, Image, Picker, LayoutAnimation, UIManager, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {CardSingle, Input} from './common';
import {connect} from 'react-redux';
import {idolChange} from '../actions';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';

class IdolForm extends React.Component{
    
    state = {showDrop: false};
    
    constructor() {
        
        super();
        
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    }

    componentWillUpdate() {
        
        LayoutAnimation.spring();
    }
        
    renderImageDrop() {

        if (this.state.showDrop) {

            return(

                <CardSingle>
                        <Input
                            desc = "Profile Picture"
                            hold = "enter an url (web only for now!)"
                            value = {this.props.image}
                            onChangeText = {text => this.props.idolChange({prop: 'image', value: text})}
                        />
                </CardSingle>

            );

        }
    }
    
    
    
    render() {
        
        
        return(
            
                <View>
                        <CardSingle>
                            <Image
                                    style={styles.profilePicStyle}
                                    source={{uri: this.props.image}}
                                    resizeMode =  {Image.resizeMode.center}
                            />
                        </CardSingle>
                        
                        <TouchableWithoutFeedback
                            onPress = {() => this.setState({showDrop: !this.state.showDrop})}
                        >
                            <View>
                                <CardSingle>
                                    <Text style = {styles.titleStyle}>
                                        Add/Edit a Profile Picture
                                    </Text>
                                </CardSingle>
                                {this.renderImageDrop()}
                            </View>
                        </TouchableWithoutFeedback>
            
                        

                        <CardSingle>
                            <Input
                                desc = "Name"
                                hold = "Ai Kizuna"
                                value = {this.props.name}
                                onChangeText = {text => this.props.idolChange({prop: 'name', value: text})}
                            />
                        </CardSingle>

                        <CardSingle>
                            <Input
                                desc = "Phone"
                                hold = "090-1271-6677"
                                value = {this.props.phone}
                                onChangeText = {text => this.props.idolChange({prop: 'phone', value: text})}
                            />
                        </CardSingle>

                        <CardSingle style = {{flexDirection: 'column'}}>
                            <Input
                                desc = "Shift"
                                hold = "19:00-21:00"
                                value = {this.props.shift}
                                onChangeText = {text => this.props.idolChange({prop: 'shift', value: text})}
                            />
                        </CardSingle>

                        <CardSingle style = {{flexDirection: 'column'}}>
                            <Input
                                desc = "Event Type"
                                hold = "Concert/Fanmeet"
                                value = {this.props.event}
                                onChangeText = {text => this.props.idolChange({prop: 'event', value: text})}
                            />
                        </CardSingle>

                        <CardSingle>
                            <ScrollView>
                                <Text>
                                    Popularity Ranking!
                                </Text>
                                <View style = {styles.starStyle}>
                                    <StarRating
                                        disabled={false}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}
                                        starSize = {35}
                                        maxStars={10}
                                        rating={this.props.rate}
                                        starColor={'cornflowerblue'}
                                        selectedStar={num => this.props.idolChange({prop: 'rate', value: num})}
                                    />
                                </View>
                            </ScrollView>
                        </CardSingle>

                        <CardSingle>
                            <ScrollView>
                                <Text style = {styles.alertStyle}>
                                    Upcoming Events!
                                </Text>
                                
                                <Text>
                                    The next event will be a {this.props.event} from {this.props.shift} on {this.props.day.dateString}.
                                </Text>
                                
                            </ScrollView>
                        </CardSingle>

                        <CardSingle>
                            
                            <ScrollView>
                                <Text>
                                    Schedule an Event!
                                </Text>
                                <Calendar 
                                    onDayPress={day => this.props.idolChange({prop: 'day', value: day})}
                                    markedDates =  {{[this.props.day.dateString]: {selected: true}}}
                                />   
                            </ScrollView>
                        </CardSingle>

                        
                </View>
        );
    }
}

const styles = {
    
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingBottom: 20
    },
    pickerIndividualStyle: {
        alignItems: 'center'
    },
    profilePicStyle: {
        width: 120,
        height: 120,
        flex: 1
    },
    titleStyle: {
        
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        color: 'red'
    },
    starStyle: {
        flex: 1,
        alignItems: 'center'
    },
    alertStyle: {
        color: 'red'
    }
    
};

const mapStateToProps = (state) => {
    
    const {name, phone, shift, image, day, rate, event} = state.idolForm;
    return {name, phone, shift, image, day, rate, event};
};

export default connect(mapStateToProps, {idolChange})(IdolForm);