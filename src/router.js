import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import IdolList from './components/idolList';
import IdolMake from './components/idolMake';
import IdolEdit from './components/idolEdit';


const RouterComponent = () => {

    return (
        <Router sceneStyle = {{paddingTop: 60}}>
            <Scene key = "auth">
                <Scene key = "login" component = {LoginForm} title = "Please Login" initial />
            </Scene>
        
            <Scene key = "main">
                <Scene
                    onRight = {() => Actions.idolMake()}
                    rightTitle = "Add"
                    key = "idolList"
                    component = {IdolList}
                    title = "Manage Idols"
                />

                <Scene key = "idolMake" component = {IdolMake} title = "Create Idol" />
                <Scene key = "idolEdit" component = {IdolEdit} title = "Edit Idol" />
            </Scene>
        </Router>

    );

};

export default RouterComponent;
