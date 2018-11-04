import React, {Component} from 'react';
import {
    View,
    Image,
    SafeAreaView
} from 'react-native';
import styles from './styles'
import {compose} from "redux";
import {connect} from 'react-redux'
import {Text, Button, Icon, Form, Item, Label, Input, Container,Content} from "native-base";
import {SYSTEM_ROUTES} from "../../constants";
import { change, Field, reduxForm } from 'redux-form'
import {TextField} from '../../components'

class ChooseHelpScreen extends Component {

   //beje: '#D4A452',
   //verde: '#87A23D'
   //fonte color: '#9F9F9F,

    render() {
        return (
            <Container>
                <Content>
                    <View style={{display: 'flex', alignItems: 'center', padding: 10}}>
                        
                    </View>
                </Content>
            </Container>
        );
    }
}



ChooseHelpScreen = compose(
    connect(null, {}),
    reduxForm({
        form: 'LoginAuthScreen',
        enableReinitialize: true,
    }),
)(ChooseHelpScreen);

export {ChooseHelpScreen}