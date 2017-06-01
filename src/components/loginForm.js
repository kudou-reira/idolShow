import React from 'react';
import {Text, Image} from 'react-native';
import {Card, CardSingle, Input, ClickButton, Loader} from './common';
import {connect} from 'react-redux';
import {emailChange, passwordChange, loginUser} from '../actions';

class LoginForm extends React.Component{
    
    onEmailChange(text){
        
        this.props.emailChange(text);
        
    }
    
    onPasswordChange(text) {
        
        this.props.passwordChange(text);
        
    }
    
    onButtonPress(){
        
        const {email, password} = this.props;
        
        this.props.loginUser({email, password});
        
    }
    
    renderLoader(){
        if(this.props.loading){
            return <Loader size = "large" />;
        }
    }
    
    
    render() {
        
        return(
        
            <Card>
            
                <CardSingle>
                    <Input
                        desc = "Email"
                        hold = "email@gmail.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSingle>
            
                <CardSingle>
                    <Input
                        secureTextEntry
                        desc = "Password"
                        hold = "password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />
                </CardSingle>
            
                <Text style = {styles.errorTextStyle} >
                    {this.props.error}
                </Text>

                <CardSingle>
                    <ClickButton
                        onPress = {this.onButtonPress.bind(this)}
                    >
                            Login
                    </ClickButton>
                    {this.renderLoader()}
                </CardSingle>

                <CardSingle>
                    <Image
                        style={styles.titlePicStyle}
                        source={{uri: 'http://www.cosplayisland.co.uk/files/costumes/5346/78828/CI_78828_1368918221.png'}}
                        resizeMode =  {Image.resizeMode.center}
                    />
                </CardSingle>
            
            </Card>
        );
        
    }
}

const styles = {
    
    errorTextStyle: {

        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    titlePicStyle: {
        width: 100,
        height: 100,
        flex: 1
    }
    
}

const mapStateToProps = state => {

    return {
        
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
    
};


export default connect(mapStateToProps, {emailChange, passwordChange, loginUser})(LoginForm);