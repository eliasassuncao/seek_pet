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

class LoginAuthScreen extends Component {

   _renderTextField (field) {
    const { meta: { touched, error }, input: { value, onChange }, nameIcon, label, ...custom } = field;
    const errorInput = touched && error ? error : null;
        return (
            <View style={styles.viewInput}>
                <Input value={value} onChangeText={onChange} placeholderTextColor="#9F9F9F" placeholder={label}/>
                <Icon type="MaterialIcons" name={nameIcon} style={styles.iconInput}/>
            </View>
        )
    }

    render() {
        const {navigation: {navigate}} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                         <View style={styles.viewButtonRegister}>
                            <Button iconRight transparent style={styles.buttonRegister}>
                                <Text style={styles.textRegister}>Cadastrar</Text>
                                <Icon style={styles.iconRegister} type="MaterialIcons" name="chevron-right"/>
                            </Button>
                        </View> 
                        <View style={styles.viewImage}>              
                            <Image
                                style={styles.image}
                                source={require('../../../public/images/logo.png')}
                                resizeMode='contain'
                                 /> 
                        </View>
                        <Form style={styles.form}>
                            <Field
                                name="login"
                                label="Login"
                                component={this._renderTextField}
                                nameIcon="perm-identity"
                            />
                            <Field
                                name="senha"
                                label="Senha"
                                component={this._renderTextField}
                                nameIcon="lock"
                            />
                        </Form>
                        <View style={styles.viewButtonLogin}>
                            <Button transparent>
                                <Text style={styles.textForgotPassword}>Esqueceu sua senha?</Text>
                            </Button>
                            <Button 
                                full 
                                style={styles.buttonLogin} 
                                onPress={() => navigate(SYSTEM_ROUTES.APP_BOTTOM_TAB_NAVIGATOR.ROUTE)}
                            >
                                <Text style={styles.textButtonLogin}>Entrar no aplicativo</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}



LoginAuthScreen = compose(
    connect(null, {}),
    reduxForm({
        form: 'LoginAuthScreen',
        enableReinitialize: true,
    }),
)(LoginAuthScreen);

export {LoginAuthScreen}