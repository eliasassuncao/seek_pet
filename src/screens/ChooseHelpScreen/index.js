import React, {Component} from 'react';
import {
    View,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import {compose} from "redux";
import {connect} from 'react-redux'
import {Text, Button, Icon, Form, Item, Label, Input, Container,Content} from "native-base";
import {SYSTEM_ROUTES} from "../../constants";
import { change, Field, reduxForm } from 'redux-form'
import {TextField} from '../../components'

class ChooseHelpScreen extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <View style={{display: 'flex', alignItems: 'center', padding: 10}}>
                        <Text style={{fontSize: 18, color: '#D4A452', fontWeight: '500', marginTop: 10}}>Escolha o mais próximo!</Text>
                        <Text style={{fontSize: 15, color: '#9F9F9F'}}>Listamos os pets mais próximos, escolha</Text>
                        <Text style={{fontSize: 15, color: '#9F9F9F'}}>um deles para ajudar.</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(SYSTEM_ROUTES.PET_SELECTED_HELP_SCREEN.ROUTE)}>
                            <Image
                                style={{width: 300,height: 300}}
                                source={require('../../../public/images/map.png')}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
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